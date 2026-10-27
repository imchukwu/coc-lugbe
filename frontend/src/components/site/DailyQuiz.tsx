import { useState, useEffect } from "react";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  BookOpen,
  Share2,
  Calendar,
  Flame,
  Clock,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getTodayQuiz,
  getTodayDateKey,
  getSavedQuizAnswer,
  saveQuizAnswer,
  getCurrentStreak,
  getTimeUntilTomorrow,
  type QuizQuestion,
} from "@/data/quizData";
import { useToast } from "@/hooks/use-toast";

export const DailyQuiz = () => {
  const { toast } = useToast();
  const [quizData, setQuizData] = useState<{
    question: QuizQuestion;
    index: number;
    dateString: string;
  } | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number }>({
    hours: 0,
    minutes: 0,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const today = getTodayQuiz();
    const dateKey = getTodayDateKey();
    setQuizData(today);

    // Check for previous answer today
    const saved = getSavedQuizAnswer(dateKey);
    if (saved) {
      setSelectedOption(saved.selectedOption);
      setHasAnswered(true);
      setIsCorrect(saved.isCorrect);
    }

    setStreak(getCurrentStreak());
    setTimeLeft(getTimeUntilTomorrow());

    // Update countdown every minute
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilTomorrow());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!quizData) return null;

  const { question, dateString } = quizData;
  const dateKey = getTodayDateKey();

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;

    const correct = index === question.correctIndex;
    setSelectedOption(index);
    setHasAnswered(true);
    setIsCorrect(correct);

    saveQuizAnswer(dateKey, index, correct);
    setStreak(getCurrentStreak());

    if (correct) {
      toast({
        title: "Amen! That's Correct! 🎉",
        description: `Verified with ${question.scripture}. Keep meditating on the Word!`,
      });
    } else {
      toast({
        title: "Good effort! 📖",
        description: `The correct answer was "${question.options[question.correctIndex]}". See explanation below!`,
        variant: "destructive",
      });
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `📖 *Church of Christ Lugbe - Daily Bible Quiz*\n\n` +
      `*Today's Question:*\n${question.question}\n\n` +
      `A) ${question.options[0]}\n` +
      `B) ${question.options[1]}\n` +
      `C) ${question.options[2]}\n` +
      `D) ${question.options[3]}\n\n` +
      `Think you know the answer? Test your Bible knowledge and read the scripture breakdown here:\n` +
      `https://coclugbe.org/#daily-quiz`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#daily-quiz`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "Quiz link copied to clipboard. Share with brethren!",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const optionLetters = ["A", "B", "C", "D"];

  return (
    <section
      id="daily-quiz"
      className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden"
    >
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="container relative max-w-4xl z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs tracking-[0.25em] uppercase mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Daily Scriptural Quiz
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Sharpen Your Knowledge in God’s Word
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            One question every day to encourage daily Bible study, fellowship, and personal meditation on sound doctrine.
          </p>
        </div>

        {/* Main Quiz Card */}
        <div className="rounded-3xl bg-card border border-border shadow-card p-6 sm:p-9 md:p-10 relative overflow-hidden">
          {/* Top Banner inside card */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border/70">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary text-foreground text-xs font-medium border border-border">
                <Calendar className="h-3.5 w-3.5 text-accent" />
                {dateString}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold">
                {question.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {streak > 0 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-xs border border-amber-500/20">
                  <Flame className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  {streak} {streak === 1 ? "Day" : "Days"} Streak
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                <Clock className="h-3.5 w-3.5 text-accent" />
                Next in {timeLeft.hours}h {timeLeft.minutes}m
              </span>
            </div>
          </div>

          {/* Question Text */}
          <div className="py-7">
            <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
              Today's Question
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground leading-snug">
              {question.question}
            </h3>
          </div>

          {/* Multiple Choice Options */}
          <div className="grid sm:grid-cols-2 gap-3.5">
            {question.options.map((option, idx) => {
              const letter = optionLetters[idx];
              const isSelected = selectedOption === idx;
              const isOptionCorrect = idx === question.correctIndex;

              let buttonStyle = "bg-secondary/50 hover:bg-secondary border-border/80 text-foreground";
              let badgeStyle = "bg-background text-foreground border-border";

              if (hasAnswered) {
                if (isOptionCorrect) {
                  buttonStyle = "bg-emerald-500/15 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-medium ring-1 ring-emerald-500/50";
                  badgeStyle = "bg-emerald-500 text-white border-emerald-500";
                } else if (isSelected && !isOptionCorrect) {
                  buttonStyle = "bg-rose-500/15 border-rose-500 text-rose-950 dark:text-rose-200 ring-1 ring-rose-500/50";
                  badgeStyle = "bg-rose-500 text-white border-rose-500";
                } else {
                  buttonStyle = "opacity-50 bg-secondary/30 border-border/50 text-muted-foreground";
                  badgeStyle = "bg-secondary text-muted-foreground border-border/50";
                }
              } else if (isSelected) {
                buttonStyle = "bg-primary text-primary-foreground border-primary";
                badgeStyle = "bg-accent text-accent-foreground border-accent";
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={cn(
                    "flex items-center text-left p-4 rounded-2xl border transition-all duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    !hasAnswered && "hover:border-accent/80 hover:shadow-card-soft active:scale-[0.99]",
                    buttonStyle
                  )}
                >
                  <div
                    className={cn(
                      "h-8 w-8 rounded-xl flex items-center justify-center font-display font-semibold text-sm shrink-0 border mr-3.5 transition-colors",
                      badgeStyle
                    )}
                  >
                    {hasAnswered && isOptionCorrect ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : hasAnswered && isSelected && !isOptionCorrect ? (
                      <XCircle className="h-4 w-4" />
                    ) : (
                      letter
                    )}
                  </div>
                  <span className="text-sm sm:text-base leading-snug flex-1">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation & Scriptural Insight Container */}
          {hasAnswered && (
            <div
              className={cn(
                "mt-8 p-6 rounded-2xl border animate-in fade-in slide-in-from-bottom-3 duration-300",
                isCorrect
                  ? "bg-emerald-500/10 border-emerald-500/30 text-foreground"
                  : "bg-amber-500/10 border-amber-500/30 text-foreground"
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Correct Answer
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold shadow-sm">
                      <HelpCircle className="h-3.5 w-3.5" /> Scriptural Insight
                    </span>
                  )}

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border text-xs font-semibold text-primary">
                    <BookOpen className="h-3.5 w-3.5 text-accent" />
                    {question.scripture}
                  </span>
                </div>

                <div className="text-xs text-muted-foreground font-medium">
                  {isCorrect ? "Well done! 🌟" : "Search the Scriptures daily (Acts 17:11)"}
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed pt-1">
                {question.explanation}
              </p>

              {/* Share & Invite Section */}
              <div className="mt-5 pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-muted-foreground">
                  Challenge your family, friends, and brethren with today's question.
                </div>

                <div className="flex items-center gap-2.5">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyLink}
                    className="h-9 gap-1.5 text-xs bg-background/80"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy Link"}
                  </Button>

                  <Button
                    size="sm"
                    onClick={handleShareWhatsApp}
                    className="h-9 gap-1.5 text-xs bg-[#25D366] hover:bg-[#20ba59] text-white border-0 shadow-sm"
                  >
                    Share on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom encouragement footnote */}
          {!hasAnswered && (
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/40">
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-accent" />
                Select an answer to reveal the biblical context & scripture reference.
              </span>
              <span className="hidden sm:inline">1 attempt per day</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DailyQuiz;

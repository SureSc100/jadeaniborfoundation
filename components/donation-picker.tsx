"use client"

import { useMemo, useRef, useState } from "react"
import { Heart } from "lucide-react"

const PRESETS = [5000, 10000, 20000, 50000, 80000, 100000]

const formatNGN = (n: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n)

export default function DonationPicker() {
  const donateNowRef = useRef<HTMLButtonElement | null>(null)

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")

  const finalAmount = useMemo(() => {
    if (selectedAmount !== null) return selectedAmount
    const n = Number(customAmount)
    return Number.isFinite(n) ? n : 0
  }, [selectedAmount, customAmount])

  const selectPreset = (amt: number) => {
    setSelectedAmount(amt)
    setCustomAmount("")


    // after selecting, scroll to the Donate Now button (helps on mobile)
    requestAnimationFrame(() => {
      donateNowRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    })
  }

  const onCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handleDonate = () => {
    if (!finalAmount || finalAmount <= 0) return

    // connect Stripe/Paystack/etc later
    alert(`Selected donation: ${formatNGN(finalAmount)}`)
  }

  return (
    <div className="bg-card rounded-xl shadow-md border border-border/50 p-8 space-y-4">
      <h3 className="font-serif text-2xl font-bold text-foreground">
        Make Your Donation
      </h3>

      <div className="space-y-3">
        {PRESETS.map((amount) => {
          const isActive = selectedAmount === amount

          return (
            <button
              key={amount}
              type="button"
              onClick={() => selectPreset(amount)}
              className={[
                "w-full py-3 px-4 border-2 rounded-lg font-semibold transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {formatNGN(amount)}
            </button>
          )
        })}

        <input
          type="number"
          placeholder="Custom Amount (₦)"
          value={customAmount}
          onChange={onCustomChange}
          className="w-full py-3 px-4 border-2 border-input rounded-lg font-semibold text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary bg-background"
        />
      </div>

      <button
        ref={donateNowRef}
        type="button"
        onClick={handleDonate}
        disabled={!finalAmount || finalAmount <= 0}
        className={[
          "w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2",
          !finalAmount || finalAmount <= 0
            ? "bg-accent/40 text-accent-foreground/70 cursor-not-allowed"
            : "bg-accent text-accent-foreground hover:bg-accent/90",
        ].join(" ")}
      >
        <Heart size={20} />
        Donate Now{finalAmount ? ` (${formatNGN(finalAmount)})` : ""}
      </button>

      <p className="text-xs text-foreground/60 text-center">
        Secure donation processed via Stripe. Your information is protected.
      </p>
    </div>
  )
}
import DonationForm from "@/components/donation/DonationForm";

const DonateUPI = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-10 text-center">
        <h1 className="text-3xl font-bold">Donate via UPI</h1>
        <p className="text-muted-foreground mt-2">
          Support monthly donations using UPI AutoPay
        </p>
      </div>

      {/* 👇 IMPORTANT: pass prop to show only UPI */}
      <DonationForm mode="upi" />
    </div>
  );
};

export default DonateUPI;
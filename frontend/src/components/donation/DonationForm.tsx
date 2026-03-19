// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   CreditCard,
//   Check,
//   Users,
//   CheckCircle2,
//   Sparkles,
//   Heart,
//   ClipboardList,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";
// import childReading from "@/assets/child-reading.jpg";
// import childrenMeal from "@/assets/children-meal.jpg";
// import childrenActivities from "@/assets/children-activities.jpg";

// const SPONSORSHIP_TIERS = [
//   {
//     value: "education",
//     amount: 800,
//     label: "Education",
//     image: childReading,
//     popular: false,
//     includes: ["Quality education", "School supplies", "Academic support"],
//   },
//   {
//     value: "food-education",
//     amount: 1000,
//     label: "Food & Education",
//     image: childrenMeal,
//     popular: true,
//     includes: ["Nutritious meals", "Education", "Health support"],
//   },
//   {
//     value: "complete",
//     amount: 1500,
//     label: "Complete Care",
//     image: childrenActivities,
//     popular: false,
//     includes: ["Food", "Education", "Life skills"],
//   },
//   {
//     value: "custom",
//     amount: 0,
//     label: "Custom Amount",
//     image: childReading,
//     popular: false,
//     includes: ["Donate any amount you wish"],
//   },
// ];

// const DonationForm = () => {
//   const [step, setStep] = useState(1);
//   const [selectedTier, setSelectedTier] = useState("food-education");
//   const [numberOfChildren, setNumberOfChildren] = useState(1);
//   const [customAmount, setCustomAmount] = useState<number>(0);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     pan: "",
//   });

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const currentTier = SPONSORSHIP_TIERS.find(
//     (t) => t.value === selectedTier
//   );

//   const totalAmount =
//     selectedTier === "custom"
//       ? customAmount
//       : (currentTier?.amount || 0) * numberOfChildren;

//   const handleSubmit = async () => {
//     try {
//       if (!totalAmount || totalAmount <= 0) {
//         toast.error("Invalid donation amount");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         // body: JSON.stringify({
//         //   amount: totalAmount,
//         //   name: formData.fullName,
//         //   email: formData.email,
//         //   phone: formData.phone,
//         // }),
        
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           phone: formData.phone,
//           pan: formData.pan,
//           planType: selectedTier,
//           childrenCount: numberOfChildren,
//           amount: totalAmount,
//       }),
//       });

//       const order = await response.json();

//       if (!order.id) throw new Error("Order creation failed");

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: "INR",
//         name: "HK Vidya Foundation",
//         description: "Donation Payment",
//         order_id: order.id,
//         handler: async function (response: any) {
//           const verifyRes = await fetch(
//             "http://localhost:5000/verify-payment",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Donation Successful 🎉");
//           } else {
//             toast.error("Payment Verification Failed");
//           }
//         },
//         prefill: {
//           name: formData.fullName,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: {
//           color: "#f97316",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error(error);
//       toast.error("Payment failed");
//     }
//   };

//   return (
//     <section className="py-16 bg-background">
//       <div className="container max-w-4xl mx-auto px-4">

//         {step === 1 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Choose Sponsorship Plan
//             </h2>

//             <div className="grid md:grid-cols-4 gap-4 mb-8">
//               {SPONSORSHIP_TIERS.map((tier) => (
//                 <button
//                   key={tier.value}
//                   onClick={() => setSelectedTier(tier.value)}
//                   className={cn(
//                     "rounded-xl border-2 p-4 text-left",
//                     selectedTier === tier.value
//                       ? "border-primary"
//                       : "border-border"
//                   )}
//                 >
//                   <img
//                     src={tier.image}
//                     alt={tier.label}
//                     className="h-28 w-full object-cover rounded mb-3"
//                   />
//                   <h3 className="font-bold">{tier.label}</h3>
//                   {tier.value !== "custom" && (
//                     <p className="text-primary font-semibold">
//                       ₹{tier.amount}/child
//                     </p>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {selectedTier !== "custom" && (
//               <div className="mb-6">
//                 <Label>Number of Children</Label>
//                 <div className="flex items-center gap-4 mt-2">
//                   <button
//                     onClick={() =>
//                       setNumberOfChildren(
//                         Math.max(1, numberOfChildren - 1)
//                       )
//                     }
//                     className="px-4 py-2 border rounded"
//                   >
//                     -
//                   </button>
//                   <span className="font-bold text-lg">
//                     {numberOfChildren}
//                   </span>
//                   <button
//                     onClick={() =>
//                       setNumberOfChildren(numberOfChildren + 1)
//                     }
//                     className="px-4 py-2 border rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             )}

//             {selectedTier === "custom" && (
//               <div className="mb-6">
//                 <Label>Enter Custom Amount (₹)</Label>
//                 <Input
//                   type="number"
//                   min="1"
//                   value={customAmount || ""}
//                   onChange={(e) =>
//                     setCustomAmount(Number(e.target.value))
//                   }
//                   className="mt-2"
//                 />
//               </div>
//             )}

//             <Button
//               className="w-full"
//               onClick={() => setStep(2)}
//               disabled={selectedTier === "custom" && customAmount <= 0}
//             >
//               Continue
//             </Button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Your Information
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">
//               <Input
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={(e) =>
//                   handleInputChange("fullName", e.target.value)
//                 }
//               />
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   handleInputChange("email", e.target.value)
//                 }
//               />
//               <Input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   handleInputChange("phone", e.target.value)
//                 }
//               />
//               <Input
//                 placeholder="PAN (Optional)"
//                 value={formData.pan}
//                 onChange={(e) =>
//                   handleInputChange("pan", e.target.value)
//                 }
//               />
//             </div>

//             <div className="flex gap-4 mt-8">
//               <Button variant="outline" onClick={() => setStep(1)}>
//                 Back
//               </Button>
//               <Button
//                 onClick={() => setStep(3)}
//                 disabled={
//                   !formData.fullName ||
//                   !formData.email ||
//                   !formData.phone
//                 }
//               >
//                 Continue
//               </Button>
//             </div>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <h2 className="text-2xl font-bold mb-4">
//               Confirm Donation
//             </h2>

//             <div className="border p-6 rounded-lg mb-6">
//               <p><strong>Plan:</strong> {currentTier?.label}</p>
//               {selectedTier !== "custom" && (
//                 <p><strong>Children:</strong> {numberOfChildren}</p>
//               )}
//               <p><strong>Amount:</strong> ₹{totalAmount}</p>
//               <p><strong>Name:</strong> {formData.fullName}</p>
//             </div>

//             <div className="flex gap-4">
//               <Button variant="outline" onClick={() => setStep(2)}>
//                 Back
//               </Button>
//               <Button onClick={handleSubmit}>
//                 Proceed to Payment
//               </Button>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default DonationForm;









//below is the updated code


// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   CreditCard,
//   Check,
//   Users,
//   CheckCircle2,
//   Sparkles,
//   Heart,
//   ClipboardList,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";
// import childReading from "@/assets/child-reading.jpg";
// import childrenMeal from "@/assets/children-meal.jpg";
// import childrenActivities from "@/assets/children-activities.jpg";

// const SPONSORSHIP_TIERS = [
//   {
//     value: "education",
//     amount: 800,
//     label: "Education",
//     image: childReading,
//     popular: false,
//     includes: ["Quality education", "School supplies", "Academic support"],
//   },
//   {
//     value: "food-education",
//     amount: 1000,
//     label: "Food & Education",
//     image: childrenMeal,
//     popular: true,
//     includes: ["Nutritious meals", "Education", "Health support"],
//   },
//   {
//     value: "complete",
//     amount: 1500,
//     label: "Complete Care",
//     image: childrenActivities,
//     popular: false,
//     includes: ["Food", "Education", "Life skills"],
//   },
//   {
//     value: "custom",
//     amount: 0,
//     label: "Custom Amount",
//     image: childReading,
//     popular: false,
//     includes: ["Donate any amount you wish"],
//   },
// ];

// const DonationForm = () => {
//   const [step, setStep] = useState(1);
//   const [selectedTier, setSelectedTier] = useState("food-education");
//   const [numberOfChildren, setNumberOfChildren] = useState(1);
//   const [customAmount, setCustomAmount] = useState<number>(0);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     pan: "",
//   });

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const currentTier = SPONSORSHIP_TIERS.find(
//     (t) => t.value === selectedTier
//   );

//   const totalAmount =
//     selectedTier === "custom"
//       ? customAmount
//       : (currentTier?.amount || 0) * numberOfChildren;

//   /*
//   ===========================
//   CREATE ORDER
//   ===========================
//   */

//   const createOrder = async () => {

//     const response = await fetch("http://localhost:5000/create-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         fullName: formData.fullName,
//         email: formData.email,
//         phone: formData.phone,
//         pan: formData.pan,
//         planType: selectedTier,
//         childrenCount: numberOfChildren,
//         amount: totalAmount,
//       }),
//     });

//     const order = await response.json();

//     if (!order.id) throw new Error("Order creation failed");

//     return order;
//   };

//   /*
//   ===========================
//   BANK ENACH
//   ===========================
//   */

//   const payViaBankENach = async () => {
//     try {

//       const order = await createOrder();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: "INR",
//         name: "HK Vidya Foundation",
//         description: "Donation Payment",
//         order_id: order.id,

//         method: {
//           card: true,
//           netbanking: true,
//           upi: false,
//           wallet: false,
//         },

//         handler: async function (response: any) {

//           const verifyRes = await fetch(
//             "http://localhost:5000/verify-payment",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Donation Successful 🎉");
//           } else {
//             toast.error("Payment Verification Failed");
//           }
//         },

//         prefill: {
//           name: formData.fullName,
//           email: formData.email,
//           contact: formData.phone,
//         },

//         theme: {
//           color: "#f97316",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();

//     } catch (error) {
//       console.error(error);
//       toast.error("Payment failed");
//     }
//   };

//   /*
//   ===========================
//   UPI ENACH
//   ===========================
//   */

//   const payViaUpiENach = async () => {
//     try {

//       const order = await createOrder();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: "INR",
//         name: "HK Vidya Foundation",
//         description: "Donation Payment",
//         order_id: order.id,

//         method: {
//           upi: true,
//           card: false,
//           netbanking: false,
//           wallet: false,
//         },

//         config: {
//           display: {
//             blocks: {
//               upi: {
//                 name: "Pay via UPI",
//                 instruments: [
//                   {
//                     method: "upi",
//                     flows: ["collect"],
//                   },
//                 ],
//               },
//             },
//             sequence: ["block.upi"],
//             preferences: {
//               show_default_blocks: false,
//             },
//           },
//         },

//         handler: async function (response: any) {

//           const verifyRes = await fetch(
//             "http://localhost:5000/verify-payment",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Donation Successful 🎉");
//           } else {
//             toast.error("Payment Verification Failed");
//           }
//         },

//         prefill: {
//           name: formData.fullName,
//           email: formData.email,
//           contact: formData.phone,
//         },

//         theme: {
//           color: "#f97316",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();

//     } catch (error) {
//       console.error(error);
//       toast.error("Payment failed");
//     }
//   };

//   return (
//     <section className="py-16 bg-background">
//       <div className="container max-w-4xl mx-auto px-4">

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Choose Sponsorship Plan
//             </h2>

//             <div className="grid md:grid-cols-4 gap-4 mb-8">
//               {SPONSORSHIP_TIERS.map((tier) => (
//                 <button
//                   key={tier.value}
//                   onClick={() => setSelectedTier(tier.value)}
//                   className={cn(
//                     "rounded-xl border-2 p-4 text-left",
//                     selectedTier === tier.value
//                       ? "border-primary"
//                       : "border-border"
//                   )}
//                 >
//                   <img
//                     src={tier.image}
//                     alt={tier.label}
//                     className="h-28 w-full object-cover rounded mb-3"
//                   />
//                   <h3 className="font-bold">{tier.label}</h3>
//                   {tier.value !== "custom" && (
//                     <p className="text-primary font-semibold">
//                       ₹{tier.amount}/child
//                     </p>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {selectedTier !== "custom" && (
//               <div className="mb-6">
//                 <Label>Number of Children</Label>
//                 <div className="flex items-center gap-4 mt-2">
//                   <button
//                     onClick={() =>
//                       setNumberOfChildren(
//                         Math.max(1, numberOfChildren - 1)
//                       )
//                     }
//                     className="px-4 py-2 border rounded"
//                   >
//                     -
//                   </button>
//                   <span className="font-bold text-lg">
//                     {numberOfChildren}
//                   </span>
//                   <button
//                     onClick={() =>
//                       setNumberOfChildren(numberOfChildren + 1)
//                     }
//                     className="px-4 py-2 border rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             )}

//             {selectedTier === "custom" && (
//               <div className="mb-6">
//                 <Label>Enter Custom Amount (₹)</Label>
//                 <Input
//                   type="number"
//                   min="1"
//                   value={customAmount || ""}
//                   onChange={(e) =>
//                     setCustomAmount(Number(e.target.value))
//                   }
//                   className="mt-2"
//                 />
//               </div>
//             )}

//             <Button
//               className="w-full"
//               onClick={() => setStep(2)}
//               disabled={selectedTier === "custom" && customAmount <= 0}
//             >
//               Continue
//             </Button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Your Information
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">
//               <Input
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={(e) =>
//                   handleInputChange("fullName", e.target.value)
//                 }
//               />
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   handleInputChange("email", e.target.value)
//                 }
//               />
//               <Input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   handleInputChange("phone", e.target.value)
//                 }
//               />
//               <Input
//                 placeholder="PAN (Optional)"
//                 value={formData.pan}
//                 onChange={(e) =>
//                   handleInputChange("pan", e.target.value)
//                 }
//               />
//             </div>

//             <div className="flex gap-4 mt-8">
//               <Button variant="outline" onClick={() => setStep(1)}>
//                 Back
//               </Button>

//               <Button
//                 onClick={() => setStep(3)}
//                 disabled={
//                   !formData.fullName ||
//                   !formData.email ||
//                   !formData.phone
//                 }
//               >
//                 Continue
//               </Button>
//             </div>
//           </>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             <h2 className="text-2xl font-bold mb-4">
//               Confirm Donation
//             </h2>

//             <div className="border p-6 rounded-lg mb-6">
//               <p><strong>Plan:</strong> {currentTier?.label}</p>
//               {selectedTier !== "custom" && (
//                 <p><strong>Children:</strong> {numberOfChildren}</p>
//               )}
//               <p><strong>Amount:</strong> ₹{totalAmount}</p>
//               <p><strong>Name:</strong> {formData.fullName}</p>
//             </div>

//             <div className="flex gap-4">
//               <Button variant="outline" onClick={() => setStep(2)}>
//                 Back
//               </Button>

//               <Button onClick={payViaBankENach}>
//                 Pay via Cards/NetBanking
//               </Button>

//               <Button onClick={payViaUpiENach}>
//                 Pay via UPI 
//               </Button>
//             </div>
//           </>
//         )}

//       </div>
//     </section>
//   );
// };

// export default DonationForm;







//below is the updated code

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   CreditCard,
//   Check,
//   Users,
//   CheckCircle2,
//   Sparkles,
//   Heart,
//   ClipboardList,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";
// import childReading from "@/assets/child-reading.jpg";
// import childrenMeal from "@/assets/children-meal.jpg";
// import childrenActivities from "@/assets/children-activities.jpg";

// const SPONSORSHIP_TIERS = [
//   {
//     value: "education",
//     amount: 800,
//     label: "Education",
//     image: childReading,
//     popular: false,
//     includes: ["Quality education", "School supplies", "Academic support"],
//   },
//   {
//     value: "food-education",
//     amount: 1000,
//     label: "Food & Education",
//     image: childrenMeal,
//     popular: true,
//     includes: ["Nutritious meals", "Education", "Health support"],
//   },
//   {
//     value: "complete",
//     amount: 1500,
//     label: "Complete Care",
//     image: childrenActivities,
//     popular: false,
//     includes: ["Food", "Education", "Life skills"],
//   },
//   {
//     value: "custom",
//     amount: 0,
//     label: "Custom Amount",
//     image: childReading,
//     popular: false,
//     includes: ["Donate any amount you wish"],
//   },
// ];

// const DonationForm = () => {
//   const [step, setStep] = useState(1);
//   const [selectedTier, setSelectedTier] = useState("food-education");
//   const [numberOfChildren, setNumberOfChildren] = useState(1);
//   const [customAmount, setCustomAmount] = useState<number>(0);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     pan: "",
//   });

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const currentTier = SPONSORSHIP_TIERS.find(
//     (t) => t.value === selectedTier
//   );

//   const totalAmount =
//     selectedTier === "custom"
//       ? customAmount
//       : (currentTier?.amount || 0) * numberOfChildren;

//   /*
//   ===========================
//   BANK ENACH
//   ===========================
//   */

//   const payViaBankENach = async () => {
//     try {
//       console.log("Frontend amount:", totalAmount);  

//       const response = await fetch("http://localhost:5000/create-bank-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           phone: formData.phone,
//           pan: formData.pan,
//           planType: selectedTier,
//           childrenCount: numberOfChildren,
//           amount: totalAmount,
//         }),
//       });

//       const order = await response.json();

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_BANK_KEY_ID,
//         amount: order.amount,
//         currency: "INR",
//         name: "HK Vidya Foundation",
//         description: "Donation Payment",
//         order_id: order.id,

//         method: {
//           card: true,
//           netbanking: true,
//           upi: false,
//           wallet: false,
//         },

//         handler: async function (response: any) {
//           const verifyRes = await fetch(
//             "http://localhost:5000/verify-payment",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Donation Successful 🎉");
//           } else {
//             toast.error("Payment Verification Failed");
//           }
//         },

//         prefill: {
//           name: formData.fullName,
//           email: formData.email,
//           contact: formData.phone,
//         },

//         theme: {
//           color: "#f97316",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();

//     } catch (error) {
//       console.error(error);
//       toast.error("Payment failed");
//     }
//   };

//   /*
//   ===========================
//   UPI ENACH
//   ===========================
//   */

//   const payViaUpiENach = async () => {
//     try {
//       console.log("Frontend amount (UPI):", totalAmount);

//       const response = await fetch("http://localhost:5000/create-upi-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           phone: formData.phone,
//           pan: formData.pan,
//           planType: selectedTier,
//           childrenCount: numberOfChildren,
//           amount: totalAmount,
//         }),
//       });

//       const order = await response.json();

//       const options = {
//   key: import.meta.env.VITE_RAZORPAY_UPI_KEY_ID,
//   amount: order.amount,
//   currency: "INR",
//   name: "HK Vidya Foundation",
//   description: "Donation Payment",
//   order_id: order.id,

//   method: {
//     upi: true,
//     card: false,
//     netbanking: false,
//     wallet: false
//   },

//   handler: async function (response: any) {
//     const verifyRes = await fetch(
//       "http://localhost:5000/verify-payment",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(response),
//       }
//     );

//     const verifyData = await verifyRes.json();

//     if (verifyData.success) {
//       toast.success("Donation Successful 🎉");
//     } else {
//       toast.error("Payment Verification Failed");
//     }
//   },

//   prefill: {
//     name: formData.fullName,
//     email: formData.email,
//     contact: formData.phone,
//   },

//   theme: {
//     color: "#f97316",
//   },
// };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();

//     } catch (error) {
//       console.error(error);
//       toast.error("Payment failed");
//     }
//   };

//   return (
//     <section className="py-16 bg-background">
//       <div className="container max-w-4xl mx-auto px-4">

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Choose Sponsorship Plan
//             </h2>

//             <div className="grid md:grid-cols-4 gap-4 mb-8">
//               {SPONSORSHIP_TIERS.map((tier) => (
//                 <button
//                   key={tier.value}
//                   onClick={() => setSelectedTier(tier.value)}
//                   className={cn(
//                     "rounded-xl border-2 p-4 text-left",
//                     selectedTier === tier.value
//                       ? "border-primary"
//                       : "border-border"
//                   )}
//                 >
//                   <img
//                     src={tier.image}
//                     alt={tier.label}
//                     className="h-28 w-full object-cover rounded mb-3"
//                   />
//                   <h3 className="font-bold">{tier.label}</h3>
//                   {tier.value !== "custom" && (
//                     <p className="text-primary font-semibold">
//                       ₹{tier.amount}/child
//                     </p>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {selectedTier !== "custom" && (
//               <div className="mb-6">
//                 <Label>Number of Children</Label>
//                 <div className="flex items-center gap-4 mt-2">
//                   <button
//                     onClick={() =>
//                       setNumberOfChildren(
//                         Math.max(1, numberOfChildren - 1)
//                       )
//                     }
//                     className="px-4 py-2 border rounded"
//                   >
//                     -
//                   </button>
//                   <span className="font-bold text-lg">
//                     {numberOfChildren}
//                   </span>
//                   <button
//                     onClick={() =>
//                       setNumberOfChildren(numberOfChildren + 1)
//                     }
//                     className="px-4 py-2 border rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             )}

//             {selectedTier === "custom" && (
//               <div className="mb-6">
//                 <Label>Enter Custom Amount (₹)</Label>
//                 <Input
//                   type="number"
//                   min="1"
//                   value={customAmount || ""}
//                   onChange={(e) =>
//                     setCustomAmount(Number(e.target.value))
//                   }
//                   className="mt-2"
//                 />
//               </div>
//             )}

//             <Button
//               className="w-full"
//               onClick={() => setStep(2)}
//               disabled={selectedTier === "custom" && customAmount <= 0}
//             >
//               Continue
//             </Button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Your Information
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">
//               <Input
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={(e) =>
//                   handleInputChange("fullName", e.target.value)
//                 }
//               />
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   handleInputChange("email", e.target.value)
//                 }
//               />
//               <Input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   handleInputChange("phone", e.target.value)
//                 }
//               />
//               <Input
//                 placeholder="PAN (Optional)"
//                 value={formData.pan}
//                 onChange={(e) =>
//                   handleInputChange("pan", e.target.value)
//                 }
//               />
//             </div>

//             <div className="flex gap-4 mt-8">
//               <Button variant="outline" onClick={() => setStep(1)}>
//                 Back
//               </Button>

//               <Button
//                 onClick={() => setStep(3)}
//                 disabled={
//                   !formData.fullName ||
//                   !formData.email ||
//                   !formData.phone
//                 }
//               >
//                 Continue
//               </Button>
//             </div>
//           </>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             <h2 className="text-2xl font-bold mb-4">
//               Confirm Donation
//             </h2>

//             <div className="border p-6 rounded-lg mb-6">
//               <p><strong>Plan:</strong> {currentTier?.label}</p>
//               {selectedTier !== "custom" && (
//                 <p><strong>Children:</strong> {numberOfChildren}</p>
//               )}
//               <p><strong>Amount:</strong> ₹{totalAmount}</p>
//               <p><strong>Name:</strong> {formData.fullName}</p>
//             </div>

//             <div className="flex gap-4">
//               <Button variant="outline" onClick={() => setStep(2)}>
//                 Back
//               </Button>

//               <Button onClick={payViaBankENach}>
//                 Pay via Cards/NetBanking
//               </Button>

//               <Button onClick={payViaUpiENach}>
//                 Pay via UPI
//               </Button>
              
//             </div>
//           </>
//         )}

//       </div>
//     </section>
//   );
// };

// export default DonationForm;








// below is the updated code

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   CreditCard,
//   Check,
//   Users,
//   CheckCircle2,
//   Sparkles,
//   Heart,
//   ClipboardList,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";
// import childReading from "@/assets/child-reading.jpg";
// import childrenMeal from "@/assets/children-meal.jpg";
// import childrenActivities from "@/assets/children-activities.jpg";

// const SPONSORSHIP_TIERS = [
//   {
//     value: "education",
//     amount: 800,
//     label: "Education",
//     image: childReading,
//     popular: false,
//     includes: ["Quality education", "School supplies", "Academic support"],
//   },
//   {
//     value: "food-education",
//     amount: 1000,
//     label: "Food & Education",
//     image: childrenMeal,
//     popular: true,
//     includes: ["Nutritious meals", "Education", "Health support"],
//   },
//   {
//     value: "complete",
//     amount: 1500,
//     label: "Complete Care",
//     image: childrenActivities,
//     popular: false,
//     includes: ["Food", "Education", "Life skills"],
//   }
//   // ❌ custom removed for autopay
// ];

// const DonationForm = () => {
//   const [step, setStep] = useState(1);
//   const [selectedTier, setSelectedTier] = useState("food-education");
//   const [numberOfChildren, setNumberOfChildren] = useState(1);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     pan: "",
//   });

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const currentTier = SPONSORSHIP_TIERS.find(
//     (t) => t.value === selectedTier
//   );

//   const totalAmount =
//     (currentTier?.amount || 0) * numberOfChildren;

//   /*
//   ===========================
//   AUTOPAY SUBSCRIPTION
//   ===========================
//   */

//   const startBankAutoPay = async () => {
//   const response = await fetch("http://localhost:5000/create-subscription", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       pan: formData.pan,
//       planType: selectedTier,
//       childrenCount: numberOfChildren,
//     }),
//   });

//   const data = await response.json();
//   const subscription = data.subscriptions[0];

//   const options = {
//     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//     subscription_id: subscription.id,

//     method: {
//       card: true,
//       netbanking: true,
//       upi: false,   // ❌ disable UPI
//     }
//   };

//   const rzp = new (window as any).Razorpay(options);
//   rzp.open();
// };
// const startUPIAutoPay = async () => {
//   const response = await fetch("http://localhost:5000/create-subscription", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       pan: formData.pan,
//       planType: selectedTier,
//       childrenCount: numberOfChildren,
//     }),
//   });

//   const data = await response.json();
//   const subscription = data.subscriptions[0];

//   const options = {
//     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//     subscription_id: subscription.id,

//     method: {
//       upi: true,
//       card: false,
//       netbanking: false,
//     },

//     config: {
//       display: {
//         blocks: {
//           upi: {
//             name: "UPI Autopay",
//             instruments: [
//               {
//                 method: "upi",
//                 flows: ["collect"] // ❌ removes QR mostly
//               }
//             ]
//           }
//         },
//         sequence: ["block.upi"],
//         preferences: {
//           show_default_blocks: false
//         }
//       }
//     }
//   };

//   const rzp = new (window as any).Razorpay(options);
//   rzp.open();
// };
//   return (
//     <section className="py-16 bg-background">
//       <div className="container max-w-4xl mx-auto px-4">

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Choose Sponsorship Plan
//             </h2>

//             <div className="grid md:grid-cols-3 gap-4 mb-8">
//               {SPONSORSHIP_TIERS.map((tier) => (
//                 <button
//                   key={tier.value}
//                   onClick={() => setSelectedTier(tier.value)}
//                   className={cn(
//                     "rounded-xl border-2 p-4 text-left",
//                     selectedTier === tier.value
//                       ? "border-primary"
//                       : "border-border"
//                   )}
//                 >
//                   <img
//                     src={tier.image}
//                     alt={tier.label}
//                     className="h-28 w-full object-cover rounded mb-3"
//                   />
//                   <h3 className="font-bold">{tier.label}</h3>
//                   <p className="text-primary font-semibold">
//                     ₹{tier.amount}/child/month
//                   </p>
//                 </button>
//               ))}
//             </div>

//             <div className="mb-6">
//               <Label>Number of Children</Label>
//               <div className="flex items-center gap-4 mt-2">
//                 <button
//                   onClick={() =>
//                     setNumberOfChildren(
//                       Math.max(1, numberOfChildren - 1)
//                     )
//                   }
//                   className="px-4 py-2 border rounded"
//                 >
//                   -
//                 </button>
//                 <span className="font-bold text-lg">
//                   {numberOfChildren}
//                 </span>
//                 <button
//                   onClick={() =>
//                     setNumberOfChildren(numberOfChildren + 1)
//                   }
//                   className="px-4 py-2 border rounded"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             <Button
//               className="w-full"
//               onClick={() => setStep(2)}
//             >
//               Continue
//             </Button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <h2 className="text-2xl font-bold mb-6">
//               Your Information
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">
//               <Input
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={(e) =>
//                   handleInputChange("fullName", e.target.value)
//                 }
//               />
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   handleInputChange("email", e.target.value)
//                 }
//               />
//               <Input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   handleInputChange("phone", e.target.value)
//                 }
//               />
//               <Input
//                 placeholder="PAN (Optional)"
//                 value={formData.pan}
//                 onChange={(e) =>
//                   handleInputChange("pan", e.target.value)
//                 }
//               />
//             </div>

//             <div className="flex gap-4 mt-8">
//               <Button variant="outline" onClick={() => setStep(1)}>
//                 Back
//               </Button>

//               <Button
//                 onClick={() => setStep(3)}
//                 disabled={
//                   !formData.fullName ||
//                   !formData.email ||
//                   !formData.phone
//                 }
//               >
//                 Continue
//               </Button>
//             </div>
//           </>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             <h2 className="text-2xl font-bold mb-4">
//               Confirm Donation
//             </h2>

//             <div className="border p-6 rounded-lg mb-6">
//               <p><strong>Plan:</strong> {currentTier?.label}</p>
//               <p><strong>Children:</strong> {numberOfChildren}</p>
//               <p><strong>Monthly Amount:</strong> ₹{totalAmount}</p>
//               <p><strong>Name:</strong> {formData.fullName}</p>
//             </div>

//             <div className="flex gap-4">
//   <Button variant="outline" onClick={() => setStep(2)}>
//     Back
//   </Button>

//   <Button onClick={startBankAutoPay}>
//     Pay via Card / Netbanking
//   </Button>

//   <Button onClick={startUPIAutoPay}>
//     Pay via UPI Autopay
//   </Button>
// </div>
//           </>
//         )}

//       </div>
//     </section>
//   );
// };

// export default DonationForm;





//below is updated code



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CreditCard,
  Check,
  Users,
  CheckCircle2,
  Sparkles,
  Heart,
  ClipboardList,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import childReading from "@/assets/child-reading.jpg";
import childrenMeal from "@/assets/children-meal.jpg";
import childrenActivities from "@/assets/children-activities.jpg";

const SPONSORSHIP_TIERS = [
  {
    value: "education",
    amount: 800,
    label: "Education",
    image: childReading,
    popular: false,
    includes: ["Quality education", "School supplies", "Academic support"],
  },
  {
    value: "food-education",
    amount: 1000,
    label: "Food & Education",
    image: childrenMeal,
    popular: true,
    includes: ["Nutritious meals", "Education", "Health support"],
  },
  {
    value: "complete",
    amount: 1500,
    label: "Complete Care",
    image: childrenActivities,
    popular: false,
    includes: ["Food", "Education", "Life skills"],
  }
];

const DonationForm = ({ mode = "all" }: { mode?: "all" | "upi" }) => {
  const [step, setStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState("food-education");
  const [numberOfChildren, setNumberOfChildren] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pan: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const currentTier = SPONSORSHIP_TIERS.find(
    (t) => t.value === selectedTier
  );

  const totalAmount =
    (currentTier?.amount || 0) * numberOfChildren;

  /*
  ===========================
  BANK AUTOPAY
  ===========================
  */

  const startBankAutoPay = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          pan: formData.pan,
          planType: selectedTier,
          childrenCount: numberOfChildren,
        }),
      });

      const data = await response.json();
      const subscription = data.subscriptions[0];

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        subscription_id: subscription.id,

        method: {
          card: true,
          netbanking: true,
          upi: false,
        },

        handler: () => {
          toast.success("Monthly Donation Started 🎉");
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error(error);
      toast.error("Payment failed");
    }
  };

  /*
  ===========================
  UPI AUTOPAY
  ===========================
  */

  const startUPIAutoPay = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          pan: formData.pan,
          planType: selectedTier,
          childrenCount: numberOfChildren,
        }),
      });

      const data = await response.json();
      const subscription = data.subscriptions[0];

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        subscription_id: subscription.id,

        method: {
          upi: true,
          card: false,
          netbanking: false,
        },

        config: {
          display: {
            blocks: {
              upi: {
                name: "UPI Autopay",
                instruments: [
                  {
                    method: "upi",
                    flows: ["collect"],
                  },
                ],
              },
            },
            sequence: ["block.upi"],
            preferences: {
              show_default_blocks: false,
            },
          },
        },

        handler: () => {
          toast.success("UPI Donation Started 🎉");
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error(error);
      toast.error("UPI Payment failed");
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-4">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6">
              Choose Sponsorship Plan
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {SPONSORSHIP_TIERS.map((tier) => (
                <button
                  key={tier.value}
                  onClick={() => setSelectedTier(tier.value)}
                  className={cn(
                    "rounded-xl border-2 p-4 text-left",
                    selectedTier === tier.value
                      ? "border-primary"
                      : "border-border"
                  )}
                >
                  <img
                    src={tier.image}
                    alt={tier.label}
                    className="h-28 w-full object-cover rounded mb-3"
                  />
                  <h3 className="font-bold">{tier.label}</h3>
                  <p className="text-primary font-semibold">
                    ₹{tier.amount}/child/month
                  </p>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <Label>Number of Children</Label>
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() =>
                    setNumberOfChildren(Math.max(1, numberOfChildren - 1))
                  }
                  className="px-4 py-2 border rounded"
                >
                  -
                </button>
                <span className="font-bold text-lg">
                  {numberOfChildren}
                </span>
                <button
                  onClick={() =>
                    setNumberOfChildren(numberOfChildren + 1)
                  }
                  className="px-4 py-2 border rounded"
                >
                  +
                </button>
              </div>
            </div>

            <Button className="w-full" onClick={() => setStep(2)}>
              Continue
            </Button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-6">
              Your Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Full Name" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} />
              <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
              <Input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
              <Input placeholder="PAN (Optional)" value={formData.pan} onChange={(e) => handleInputChange("pan", e.target.value)} />
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)} disabled={!formData.fullName || !formData.email || !formData.phone}>
                Continue
              </Button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Confirm Donation
            </h2>

            <div className="border p-6 rounded-lg mb-6">
              <p><strong>Plan:</strong> {currentTier?.label}</p>
              <p><strong>Children:</strong> {numberOfChildren}</p>
              <p><strong>Monthly Amount:</strong> ₹{totalAmount}</p>
              <p><strong>Name:</strong> {formData.fullName}</p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>

              {mode === "all" && (
                <>
                  <Button onClick={startBankAutoPay}>
                    Pay via Card / Netbanking
                  </Button>

                </>
              )}

              {mode === "upi" && (
                <Button onClick={startUPIAutoPay} className="w-full">
                  Donate via UPI
                </Button>
              )}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default DonationForm;
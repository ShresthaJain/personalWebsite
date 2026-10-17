import { Fraunces, Bricolage_Grotesque } from "next/font/google";

// Display: soft, slightly wonky serif. Body: quirky grotesque.
export const display = Fraunces({ subsets: ["latin"], axes: ["SOFT", "WONK"], style: ["normal", "italic"] });
export const body = Bricolage_Grotesque({ subsets: ["latin"] });

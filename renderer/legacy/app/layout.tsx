import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "./style.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Caretleft2 } from "@/icons/Caretleft2";
import { Caretup3 } from "@/icons/Caretup3";
import { Githublogo1 } from "@/icons/Githublogo1";
import { Hourglass2 } from "@/icons/Hourglass2";
import { Sealquestion1 } from "@/icons/Sealquestion1";
import { Sparkle2 } from "@/icons/Sparkle2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cross Gen",
  description: "Viktor`s crossword puzzle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: "row", background: 'rgb(13, 26, 32)' }}>
        <Sidebar
          buttonIcon={<Caretleft2 className="icon-instance-node-2" color="#AECBFA" />}
          buttonIcon1={<Sealquestion1 className="icon-instance-node-2" />}
          buttonIcon2={<Githublogo1 className="icon-instance-node-2" />}
          buttonIcon3={<Hourglass2 className="icon-instance-node-2" color="#AECBFA" />}
          buttonIcon4={<Caretup3 className="icon-instance-node-2" color="#AECBFA" />}
          override={<Sparkle2 className="icon-instance-node-2" color="#AECBFA" />}
          type="default"
        />
        <div style={{ display: 'flex', flexGrow: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}

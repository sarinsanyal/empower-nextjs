import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="text-muted-foreground py-0">
      <div className="container mx-auto px-6 text-center" style={{ fontFamily: "Geist, sans-serif" }}>
        <Separator className="mb-4 text-black" />
        
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/journal" className="hover:text-primary">Journal</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>

        <p className="text-xs text-muted-foreground mt-4 mb-4">
          &copy; {new Date().getFullYear()} EmPower Journal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

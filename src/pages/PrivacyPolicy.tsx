
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, Mail, FileText } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <GradientHeading variant="primary" size="xl" className="mb-4">Privacy Policy</GradientHeading>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            How xonPlus collects, uses, and protects your data
          </p>
        </div>

        <div className="glass-card-dark p-8 lg:p-10 rounded-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-400 h-7 w-7" />
            <h2 className="text-2xl font-semibold text-white">Your Privacy Matters to Us</h2>
          </div>
          <p className="text-slate-300 mb-6">
            Last Updated: 25-June-2023
          </p>
          <p className="text-slate-300 mb-6">
            At xonPlus, we believe that transparency is the cornerstone of trust. This document is designed to keep things clear about how we handle your data, ensuring you can use our services with complete peace of mind.
          </p>

          <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/30">
            <h4 className="text-lg font-medium text-white mb-3">How We Collect Information</h4>
            <ul className="space-y-4">
              <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Direct Information</span>
                  <span className="text-slate-300 text-sm">Whenever you sign up for our Alert Me or Domain Monitoring service, we request details like your email. This lets us get in touch and serve you better by alerting you of data breaches.</span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Shield className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Device & Usage Metrics</span>
                  <span className="text-slate-300 text-sm">When you visit xonPlus, we automatically fetch non-personal data like your IP address, device type, and browser. This is standard for most websites and helps us optimize our platform for users like you.</span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Eye className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Behavior Analytics</span>
                  <span className="text-slate-300 text-sm">With the aid of cookies and tools, notably Google Analytics, we dive deep into usage patterns. This doesn't mean we know your personal browsing habits; rather, it helps us understand which features are hits and which need improvement.</span>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-medium text-white mt-10 mb-4">How and Why We Use Your Data</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
            <li>Safety Protocols: We'll promptly alert you about any data breaches.</li>
            <li>Service Enhancement: We're always looking to level up. Your data guides our improvements.</li>
            <li>Demographics and Analysis: By understanding our audience, we can tailor-make experiences, but we'll never misuse this privilege.</li>
          </ul>

          <Separator className="my-10 bg-slate-800" />

          <h3 className="text-xl font-medium text-white mb-6">Your Privacy: Our Commitment</h3>
          <p className="text-slate-300 mb-8">
            Selling or sharing personal data? That's just not us. We'll shield your details from third parties unless there's a legal imperative. And even then, we'll fight for your right to privacy.
          </p>

          <h3 className="text-xl font-medium text-white mb-6">Security Measures</h3>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-500/10 p-4 rounded-full">
              <Lock className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-300 mb-4">
                At xonPlus, ensuring the safety of your data isn't just a commitment, it's our ethos. Our approach to data security is multifaceted:
              </p>
              <h4 className="text-lg font-medium text-white mb-2">Technical Measures & Administrative Protocols:</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                <li>Encrypted Connections: All communication between your device and our servers benefits from advanced encryption, providing a secure channel for your data.</li>
                <li>Firewall Protections: Our platform operates on Google's robust infrastructure, further bolstered by Cloudflare's cutting-edge web appication firewall systems.</li>
                <li>Up-to-date Security: Our API runs on Google's infrastructure, while static pages are hosted on Cloudflare.</li>
                <li>Minimal Data Interaction: We restrict data access to a need-to-know basis, ensuring that only API can interface with user data.</li>
              </ul>
              <p className="text-slate-300">
                Harnessing these comprehensive measures, we aim to make your experience with xonPlus not just beneficial but also secure.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-medium text-white mb-6">Your Empowerment Over Data</h3>
          <p className="text-slate-300 mb-4">
            We acknowledge and uphold your data rights, but it's vital to understand how they apply to our platform:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
              <h4 className="text-lg font-medium text-white mb-3">Access and Review</h4>
              <p className="text-slate-300">
                To view any data associated with your email, simply use the search function on our homepage or our authenticated search if you're logged in.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
              <h4 className="text-lg font-medium text-white mb-3">Modification</h4>
              <p className="text-slate-300">
                Discovered discrepancies? Reach out, and we'll take steps to rectify them.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
              <h4 className="text-lg font-medium text-white mb-3">Forget Me</h4>
              <p className="text-slate-300">
                Given the nature of our platform, completely erasing data isn't feasible. Instead, we offer a Privacy Shield feature. Once enabled, it ensures your email address isn't publicly searchable.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/30">
              <h4 className="text-lg font-medium text-white mb-3">Objections and Restrictions</h4>
              <p className="text-slate-300">
                If you'd rather certain data not be processed or displayed, activate the Privacy Shield. This acts as a protective barrier, preventing your email address from appearing in public searches.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-medium text-white mb-6">Policy Evolutions</h3>
          <p className="text-slate-300 mb-8">
            Our commitment to you means our Privacy Policy might change, reflecting new best practices or legal requirements. Whenever this happens, we'll communicate directly and transparently. So, keep an eye on our official policy page.
          </p>

          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/10 mb-10">
            <h4 className="text-lg font-medium text-white mb-3">Acceptable Use Policy (AUP)</h4>
            <p className="text-slate-300">
              xonPlus is a platform rooted in ethical values. We're all about promoting awareness around data breaches. By engaging with our services, you pledge to do so responsibly, abiding by our standards and the prevailing laws in your jurisdiction.
            </p>
          </div>

          <h3 className="text-xl font-medium text-white mb-6">Contact Us</h3>
          <p className="text-slate-300 mb-8">
            For questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-6 rounded-xl border border-blue-500/20 mb-10">
            <p className="text-white font-medium">Email: deva@xposedornot.com</p>
            <p className="text-slate-300">Twitter: xonPlus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

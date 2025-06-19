
import { Separator } from "@/components/ui/separator";
import { FileText, Info, Shield } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <GradientHeading variant="primary" size="xl" className="mb-4">Terms of Service</GradientHeading>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>

        <div className="glass-card-dark p-8 lg:p-10 rounded-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-blue-400 h-7 w-7" />
            <h2 className="text-2xl font-semibold text-white">Terms and Conditions</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/10 mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Info className="text-blue-400 h-5 w-5" />
              <h4 className="text-lg font-medium text-white">1. Introduction</h4>
            </div>
            <p className="text-slate-300">
              These Terms and Conditions ("Agreement") govern your use of xonPlus ("Service"), a SaaS-based tool designed to help corporations enhance their security posture by providing prompt notifications. By subscribing to and using the Service, you agree to be bound by this Agreement.
            </p>
          </div>

          <h3 className="text-xl font-medium text-white mt-10 mb-4">2. Subscription and Payment</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
            <li>2.1 The Service is provided on a monthly subscription basis.</li>
            <li>2.2 Payment is required at the beginning of each subscription period. Failure to pay may result in the suspension or termination of your access to the Service.</li>
            <li>2.3 All fees are non-refundable.</li>
          </ul>

          <Separator className="my-10 bg-slate-800" />

          <h3 className="text-xl font-medium text-white mb-6">3. Use of Service</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
            <li>3.1 You agree to use the Service only for lawful purposes and in compliance with all applicable laws.</li>
            <li>3.2 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
          </ul>
          
          <h3 className="text-xl font-medium text-white mb-6">4. Service Availability</h3>
          <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/30">
            <p className="text-slate-300 mb-4">
              4.1 xonPlus strives to ensure the availability of the Service but does not guarantee uninterrupted or error-free operation.
            </p>
            <p className="text-slate-300">
              4.2 Scheduled maintenance or unforeseen technical issues may result in temporary interruptions. xonPlus will make reasonable efforts to minimize such disruptions.
            </p>
          </div>

          <h3 className="text-xl font-medium text-white mb-6">5. Limitation of Liability</h3>
          <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
            <li>5.1 xonPlus shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the Service.</li>
            <li>5.2 The total liability of xonPlus under this Agreement shall not exceed the amount paid by you for the Service in the preceding 12 months.</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-6">6. Termination</h3>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-500/10 p-4 rounded-full">
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-300 mb-3">
                6.1 Either party may terminate this Agreement at any time with written notice.
              </p>
              <p className="text-slate-300">
                6.2 Upon termination, your access to the Service will be immediately revoked, and no further charges will be incurred.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-medium text-white mb-6">7. Amendments</h3>
          <p className="text-slate-300 mb-8">
            7.1 xonPlus reserves the right to modify these terms at any time. Changes will be communicated to you via email or through the Service. Continued use of the Service after such changes constitutes your acceptance of the new terms.
          </p>

          <h3 className="text-xl font-medium text-white mb-6">8. Governing Law</h3>
          <p className="text-slate-300 mb-8">
            This Agreement shall be governed by and construed in accordance with the laws of India.
          </p>

          <h3 className="text-xl font-medium text-white mb-6">9. Contact Information</h3>
          <p className="text-slate-300 mb-8">
            For any questions or concerns regarding these terms, please contact us at:
          </p>
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-6 rounded-xl border border-blue-500/20 mb-10">
            <p className="text-white font-medium">Email: deva@xposedornot.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;


import { Separator } from "@/components/ui/separator";
import { Cookie, Settings, Link, Users, Eye } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <GradientHeading variant="primary" size="xl" className="mb-4">Cookie Policy</GradientHeading>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            How xonPlus uses cookies and similar technologies
          </p>
        </div>

        <div className="glass-card-dark p-8 lg:p-10 rounded-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="text-blue-400 h-7 w-7" />
            <h2 className="text-2xl font-semibold text-white">Our Cookie Policy</h2>
          </div>
          <p className="text-slate-300 mb-6">
            Last Updated: May 1, 2025
          </p>
          <p className="text-slate-300 mb-6">
            This Cookie Policy explains how xonPlus ("we", "our", "us") uses cookies and similar technologies to recognize you when you visit our website and use our services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h3 className="text-xl font-medium text-white mt-10 mb-4">What are Cookies?</h3>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-500/10 p-4 rounded-full">
              <Cookie className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-300">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/30">
            <h4 className="text-lg font-medium text-white mb-3">Types of Cookies We Use</h4>
            <ul className="space-y-4">
              <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Settings className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Essential Cookies</span>
                  <span className="text-slate-300 text-sm">These cookies are necessary for the website to function and cannot be switched off in our systems.</span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Link className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Performance Cookies</span>
                  <span className="text-slate-300 text-sm">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Functional Cookies</span>
                  <span className="text-slate-300 text-sm">These cookies enable the website to provide enhanced functionality and personalization.</span>
                </div>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-3 items-start">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Eye className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Targeting Cookies</span>
                  <span className="text-slate-300 text-sm">These cookies may be set through our site by our advertising partners to build a profile of your interests.</span>
                </div>
              </li>
            </ul>
          </div>

          <Separator className="my-10 bg-slate-800" />

          <h3 className="text-xl font-medium text-white mb-6">How We Use Cookies</h3>
          <p className="text-slate-300 mb-4">
            We use cookies for several purposes, including:
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-3 mb-8">
            <li>To authenticate users and prevent fraudulent use of user accounts</li>
            <li>To remember information about your preferences and choices</li>
            <li>To understand how you use our website</li>
            <li>To personalize your experience</li>
            <li>To analyze and measure the effectiveness of our services</li>
            <li>To serve relevant advertising</li>
          </ul>

          <h3 className="text-xl font-medium text-white mb-6">Cookie Preferences</h3>
          <p className="text-slate-300 mb-8">
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
          </p>

          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border border-blue-500/10 mb-10">
            <h4 className="text-lg font-medium text-white mb-3">Managing Your Cookie Preferences</h4>
            <p className="text-slate-300 mb-4">
              You can manage your cookie preferences in the following ways:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Through your browser settings</li>
              <li>Using our cookie consent tool when you first visit our website</li>
              <li>By contacting us directly</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium text-white mb-6">Third-Party Cookies</h3>
          <p className="text-slate-300 mb-8">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may track your activities on other websites and build a profile of your interests.
          </p>

          <h3 className="text-xl font-medium text-white mb-6">Updates to This Cookie Policy</h3>
          <p className="text-slate-300 mb-8">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our website.
          </p>

          <h3 className="text-xl font-medium text-white mb-6">Contact Us</h3>
          <p className="text-slate-300 mb-8">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-6 rounded-xl border border-blue-500/20 mb-10">
            <p className="text-white font-medium">Email: deva@xposedornot.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;

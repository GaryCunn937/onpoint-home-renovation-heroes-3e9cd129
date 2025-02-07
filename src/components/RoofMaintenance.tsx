
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function RoofMaintenance() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Protect Your Home with Our Free Roof Maintenance Checklists & Renovation ROI Guide!
        </h2>
        
        <p className="text-lg text-center text-gray-700">
          Your roof is your home's first line of defense—don't let small issues turn into costly repairs. Our easy-to-follow Roof Maintenance Checklists help you keep your roof in peak condition year-round, while our Renovation ROI & Cost-Saving Guide shows you how to make smart, money-saving home upgrades.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Why Download Our Free Homeowner Resources?</h3>
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Seasonal Roof Maintenance Checklists:</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Tailored tasks for Spring, Summer, Fall, and Winter to keep your roof ready for any weather.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Prevent Costly Repairs: Spot and fix minor issues before they escalate into expensive headaches.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Gutter & Storm Damage Checklists: Ensure your entire roof system, from shingles to gutters, stays strong—even after severe weather.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Easy to Use: Step-by-step instructions with checkable boxes to track progress easily.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Pro-Approved: Expertly crafted by roofing professionals to safeguard your home investment.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Plus, Get Our Renovation ROI & Cost-Saving Guide!</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Maximize Your Investment: Discover which renovations add the most value to your home and how to get the best return.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Save on Energy Costs: Learn about energy-efficient upgrades that lower your monthly bills while boosting your home's worth.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Budget-Smart Tips: Practical advice on cutting renovation costs without compromising quality.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Expert Insights: Hear directly from renovation professionals on the smartest upgrades for long-term savings.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-primary">
            Stay Ahead of Roof Repairs & Make Smart Renovation Choices!
          </h3>
          <p className="text-lg text-gray-700">
            Don't risk leaks, mold, or expensive repairs—download your FREE checklists and renovation guide to protect your home and make smart financial decisions.
          </p>
        </div>

        <div className="bg-accent/20 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Want Extra Peace of Mind?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Schedule a FREE Roof Inspection with ONPOINT Roofing and Renovations today! Our experts will ensure your roof is in top shape and help you plan for cost-saving renovations.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <a 
              href="https://drive.google.com/drive/folders/1YDgQ2TloHa_On2_h0TvTpFo413gklcdM?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="solid"
                size="lg"
                className="group animate-bounce hover:animate-none transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Now
              </Button>
            </a>
            <p className="text-sm text-gray-600 italic">Your home's safety and value start here!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

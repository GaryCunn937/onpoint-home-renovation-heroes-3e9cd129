import { Button } from "./ui/button";
import { Download } from "lucide-react";

export default function RoofMaintenance() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Protect Your Home with Our Free Roof Maintenance Checklists!
        </h2>
        
        <p className="text-lg text-center text-gray-700">
          Your roof is your home's first line of defense—don't let small issues turn into costly repairs. Our easy-to-follow Roof Maintenance Checklists help you keep your roof in peak condition year-round.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Why Download Our Checklists?</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Seasonal Guides:</strong> Tailored tasks for Spring, Summer, Fall, and Winter.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Prevent Costly Repairs:</strong> Spot and fix minor issues before they escalate.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Gutter & Storm Damage Checklists:</strong> Protect your entire roof system after severe weather.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Easy to Use:</strong> Step-by-step instructions with checkable boxes to track progress.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span><strong>Pro-Approved:</strong> Expertly crafted by roofing professionals to safeguard your investment.</span>
            </li>
          </ul>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-primary">
            Stay Ahead of Roof Repairs—Download Your Free Checklists Today!
          </h3>
          <p className="text-lg text-gray-700">
            Don't risk leaks, mold, or expensive fixes. Get your FREE checklists and protect your home with confidence.
          </p>
        </div>

        <div className="bg-accent/20 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Want Extra Peace of Mind?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Schedule a FREE Roof Inspection with ONPOINT Roofing and Renovations today! Our experts will ensure your roof is in top shape and ready to weather any storm.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <a 
              href="https://drive.google.com/drive/folders/1HLdWyIv_MrWacg57LU94R_RaZ5YDN3Ih?usp=drive_link"
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
            <p className="text-sm text-gray-600 italic">Your home's safety starts here!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
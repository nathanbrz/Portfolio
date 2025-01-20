"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring my livelyness to your team. Let's connect and
                create something extraordinary.
              </p>
            </div>
            <div className="md:pb-6">
              <div className="flex flex-col lg:flex-row lg:gap-8 items-center">
                <button
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900"
                  onClick={() => {
                    window.location.href =
                      "mailto:nate.abreu@hotmail.com?subject=Let's%20Connect!&body=Hi%20[Your%20Name],%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I'm%20reaching%20out%20to%20discuss%20[add%20your%20reason%20here].%0D%0A%0D%0A%20Looking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0A%20Best%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Information]";
                  }}
                >
                  <span>📧</span>
                  <span className="font-semibold">Email Me!</span>
                </button>
                <button
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/nathando-se",
                      "_blank"
                    );
                  }}
                >
                  <span>🔗</span>
                  <span className="font-semibold">Connect on LinkedIn!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

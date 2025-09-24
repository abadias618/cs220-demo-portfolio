export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate developer who loves creating amazing web experiences with modern technologies. 
                I enjoy building user-friendly applications and exploring new frameworks and tools.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me learning new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Technologies</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">React & Next.js</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">JavaScript & TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Node.js</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Git & Version Control</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Full Stack Developer</h3>
                <p className="text-gray-600 text-sm">2023 - Present</p>
                <p className="text-gray-700 mt-2">
                  Building modern web applications using React, Next.js, and various backend technologies. 
                  Focused on creating scalable and maintainable code.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Frontend Developer</h3>
                <p className="text-gray-600 text-sm">2022 - 2023</p>
                <p className="text-gray-700 mt-2">
                  Specialized in creating responsive and interactive user interfaces using modern CSS frameworks 
                  and JavaScript libraries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

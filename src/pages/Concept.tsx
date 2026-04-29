interface ConceptProps {
  onNavigate: (page: string) => void;
}

export default function Concept({ onNavigate }: ConceptProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre concept</h1>
        <p className="text-purple-300 text-lg mb-16">petite phrase</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">texte explicatif</h3>
              <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-purple-600 border-opacity-30">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Product showcase"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold mb-4">texte explicatif</h3>
              <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-purple-600 border-opacity-30">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Feature showcase"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">texte explicatif</h3>
              <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-purple-600 border-opacity-30">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Another feature"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-700 to-purple-800 bg-opacity-60 backdrop-blur-sm p-8 rounded-lg border border-purple-600 border-opacity-30 min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-300">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-white text-xl font-semibold mb-4">texte explicatif</h3>
          <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm p-12 rounded-lg border border-purple-600 border-opacity-30">
            <div className="bg-gray-400 h-48 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const styles = {
  container: "min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8",
  header: "text-center mb-12",
  title: "text-4xl font-bold text-white mb-4 tracking-wider",
  subtitle: "text-gray-300 text-lg max-w-2xl mx-auto",
  filterContainer: "flex flex-wrap justify-center gap-4 mb-12",
  filterButton: (active) => `
    px-6 py-3 rounded-full text-sm font-semibold tracking-wider
    transition-all duration-300 transform hover:scale-105
    ${active ? 
      'bg-blue-500 text-white shadow-lg shadow-blue-500/50' : 
      'bg-gray-700 text-grey-300 hover:bg-gray-600'
    }
  `,
  gallery: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
  imageCard: `
    group relative overflow-hidden rounded-xl
    transform transition-all duration-500
    hover:scale-105 hover:shadow-2xl
    bg-gray-800
  `,
  image: "w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110",
  imageOverlay: "absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-500",
  imageInfo: "absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
  imageTitle: "text-white text-xl font-bold mb-2 font-montserrat",
  imageDescription: "text-white text-sm font-light opacity-90 font-roboto",
  modal: "fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4",
  modalContent: "relative max-w-4xl w-full",
  modalImage: "max-h-[80vh] w-auto mx-auto rounded-lg",
  modalInfo: "text-center mt-6",
  modalTitle: "text-white text-2xl font-bold mb-3 font-montserrat",
  modalDescription: "text-white text-lg font-light font-roboto",
  modalNav: "absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4",
  modalButton: "text-white hover:text-blue-400 transition-colors duration-300 disabled:opacity-50 disabled:hover:text-white",
  modalClose: "absolute top-4 right-4 text-white hover:text-blue-400 transition-colors duration-300"

};

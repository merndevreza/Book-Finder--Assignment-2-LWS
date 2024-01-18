const SectionTitle = ({titleMain, titleSub}) => {
   return (
      <div>
            <h6 className="mb-2 text-base lg:text-xl">{titleSub}</h6>
            <h2
              className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
            >
              {titleMain}
            </h2>
          </div>
   );
};

export default SectionTitle;
import SectionTitle from "../SectionTitle";
import SearchBar from "./SearchBar";
import SortFilter from "./SortFilter";

const MainHeader = ({onSearch}) => {
  return (
    <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
      <div className="mx-auto flex  items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
        <SectionTitle
          titleSub={"Trending on 2021"}
          titleMain={"Trending Books of the Year"}
        />
        <SearchBar onSearch={onSearch}/>
        </div>
        <SortFilter/>
      </div>
    </header>
  );
};

export default MainHeader;

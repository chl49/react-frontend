import { AlbumInfo } from "../AlbumInterface";
import { Album } from "../Components/AlbumPhotos/AlbumPhotos";
import { ScrollMenu} from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow, OnWheel} from "../Components/ScrollActions/ScrollActions";

export const Scroll = ({
    albums,
    page,
    max
}: {
    albums: AlbumInfo[];
    page: number;
    max: number;
}) => {
  return (
    <div className="scroll" style={{ paddingTop: "20px" }}>
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={OnWheel}>
            {albums.slice(page*max-max, page*max).map((albumInfo: any, idx: number) => (
                <Album
                  title={albumInfo.title}
                  url={albumInfo.url}
                  key={idx}
                />
            ))}
        </ScrollMenu>
    </div>
  );
}
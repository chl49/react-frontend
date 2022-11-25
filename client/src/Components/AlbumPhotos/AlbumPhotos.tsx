import './AlbumPhotos.css';

export const Album = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => {
  return ( 
    // Requirement #2. // Styled photos in AlbumPhotos.css
    // "diagonal-text": Formats diagonal title text inside photo
    // "box": Transforms positions
    // "overlay": Writes text over photo
    // "container": Adds drop shadow 
    // img: Adds border and rounds corners
    <div className="container"> 
      <img src={url} alt={"name"}/>
      <div className="box overlay">
        <div className="diagonal-text">
          {title}
        </div>
      </div>
    </div>
  );
}

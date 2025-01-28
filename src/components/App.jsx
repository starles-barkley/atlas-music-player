import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer>
        <div className="flex flex-col items-center space-y-4">
          <CoverArt />
          <SongTitle title="Sample Song" author="Sample Artist" />
          <PlayControls />
          <VolumeControls />
          <div className="w-full space-y-2">
            <PlayListItem title="Song 1" artist="Artist 1" length="3:45" />
            <PlayListItem title="Song 2" artist="Artist 2" length="4:20" />
            <PlayListItem title="Song 3" artist="Artist 3" length="5:00" />
          </div>
        </div>
      </MusicPlayer>
      <Footer />
    </div>
  );
}

export default App;

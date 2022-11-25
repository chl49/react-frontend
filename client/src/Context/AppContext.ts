import React from "react";
import { AlbumContext } from "../AlbumInterface";

const AppContext = React.createContext<AlbumContext | null>(null);

export default AppContext;

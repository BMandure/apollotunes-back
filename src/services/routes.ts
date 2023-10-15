import { Song } from "../types";
import songData from "./songs.json";

const songs: Array<Song> = songData;

export const getSongs = () => songs;

export const addSong = () => null;

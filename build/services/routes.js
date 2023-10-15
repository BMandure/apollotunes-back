"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSong = exports.getSongs = void 0;
const songs_json_1 = __importDefault(require("./songs.json"));
const songs = songs_json_1.default;
const getSongs = () => songs;
exports.getSongs = getSongs;
const addSong = () => null;
exports.addSong = addSong;

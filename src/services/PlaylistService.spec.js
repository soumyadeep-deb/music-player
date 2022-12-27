import { when } from "jest-when";
import PlaylistService from "./PlaylistService";
import apiService from "../helpers/apiService";

jest.mock("../helpers/apiService");

describe("Playlist Service", () => {
  it("should return all playlists", async () => {
    const data = [
      {
        id: 1,
        name: "playlist1",
      },
      {
        id: 2,
        name: "playlist2",
      },
    ];

    apiService.get.mockResolvedValue({ data: data });
    const playlists = await PlaylistService.getPlaylists();

    expect(playlists.data).toHaveLength(2);

    expect(playlists.data).toEqual([
      {
        id: 1,
        name: "playlist1",
      },
      {
        id: 2,
        name: "playlist2",
      },
    ]);
  });

  it("should create a playlist", async () => {
    const payload = {
      name: "Playlist Name",
    };

    const response = {
      id: 1,
      ...payload,
    };

    when(apiService.post)
      .calledWith(expect.any(String), payload)
      .mockResolvedValue({ data: response });

    const createdShow = await PlaylistService.create(payload);

    expect(createdShow).toEqual({
      id: 1,
      name: "Playlist Name",
      // songs: Array(0)
    });
  });

  it("should delete a playlist", async () => {
    const id = 1;

    const response = {
      data: "Playlist deleted successfully!!",
      status: 200,
    };

    when(apiService.delete)
      .calledWith(expect.any(String), id)
      .mockResolvedValue({ data: response });

    const resOnDeletion = await PlaylistService.deletePlaylist(id);

    expect(resOnDeletion.data).toEqual(
      { data: "Playlist deleted successfully!!", status: 200 }

      // songs: Array(0)
    );
  });
  it("should delete a song", async () => {
    const pid = 1;
    const sid = 1;

    const response = {
      data: "Song deleted successfully!!",
      status: 200,
    };

    when(apiService.deleteSong)
      .calledWith(expect.any(String), expect.any(String), pid, sid)
      .mockResolvedValue({ data: response });

    const resOnDeletion = await PlaylistService.deleteSong(pid, sid);

    expect(resOnDeletion.data).toEqual(
      { data: "Song deleted successfully!!", status: 200 }

      // songs: Array(0)
    );
  });
});

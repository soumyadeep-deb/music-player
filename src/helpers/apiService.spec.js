import axios from "axios";
import apiService from "./apiService";

jest.mock("axios");

describe("Api service", () => {
  let internalServerErrorResponse;
  let otherErrorResponse;

  beforeEach(() => {
    window.location.assign = jest.fn();

    internalServerErrorResponse = {
      response: {
        status: 500,
      },
    };

    otherErrorResponse = {
      response: {
        status: 400,
      },
    };
  });

  it("Should handle internal server error for get call", async () => {
    axios.get.mockRejectedValue(internalServerErrorResponse);

    await apiService.get(expect.any(String));
    expect(window.location.assign).toBeCalledTimes(1);
    expect(window.location.assign).toBeCalledWith("/error");
  });

  it("Should handle internal server error for post call", async () => {
    axios.post.mockRejectedValue(internalServerErrorResponse);

    await apiService.post(expect.any(String), expect.any(Object));
    expect(window.location.assign).toBeCalledTimes(1);
    expect(window.location.assign).toBeCalledWith("/error");
  });

  it("Should handle internal server error for delete call", async () => {
    axios.delete.mockRejectedValue(internalServerErrorResponse);

    await apiService.delete(expect.any(String), expect.any(Number));
    expect(window.location.assign).toBeCalledTimes(1);
    expect(window.location.assign).toBeCalledWith("/error");
  });

  it("Should handle internal server error for delete song call", async () => {
    axios.delete.mockRejectedValue(internalServerErrorResponse);

    await apiService.delete(
      expect.any(String),
      expect.any(String),
      expect.any(Number),
      expect.any(Number)
    );
    expect(window.location.assign).toBeCalledTimes(1);
    expect(window.location.assign).toBeCalledWith("/error");
  });

  it("Should return promise without handling error for post call", async () => {
    axios.post.mockRejectedValue(internalServerErrorResponse);

    try {
      await apiService.postWithoutErrorHandling(
        expect.any(String),
        expect.any(Object)
      );
    } catch (error) {
      expect(window.location.assign).not.toHaveBeenCalled();
    }
  });
});

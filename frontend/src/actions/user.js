import axios from "axios";
import { server } from "../server";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });

    const { data } = await axios.get(`${server}/user`);
    // const { data } = await axios.get("api/v1/user");
    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post(`${server}/login`,
      {
        email,
        password,
      },
      { withCredentials: true },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const { data } = await axios.get(`${server}/logout`,{ withCredentials: true });

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });

    const { data } = await axios.get(`${server}/me`,{ withCredentials: true });

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const updateUser = (name, email, password, about) => async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });

      const { data } = await axios.put(
        `${server}/admin/update`,
        {
          name,
          email,
          password,
          about,
        },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const addTimeline = (title, description, startdate, enddate) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });

    const { data } = await axios.post(
      `${server}admin/timeline/add`,
      {
        title,
        description,
        startdate,
        enddate,
      },
      { withCredentials: true },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });

    const { data } = await axios.delete(`${server}/admin/timeline/${id}`,{ withCredentials: true });

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addYoutube = (title, url, image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_YOUTUBE_REQUEST",
    });

    const { data } = await axios.post(
      `${server}/admin/youtube/add`,
      { title, url, image },{ withCredentials: true },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addSkills = (title, image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_SKILL_REQUEST",
    });

    const { data } = await axios.post(
      `${server}/admin/skill/add`,
      { title, image },{ withCredentials: true },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_SKILL_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_SKILL_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_SKILL_REQUEST",
    });

    const { data } = await axios.delete(`${server}/admin/skill/${id}`,{ withCredentials: true });

    dispatch({
      type: "DELETE_SKILL_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_SKILL_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteYoutube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_YOUTUBE_REQUEST",
    });

    const { data } = await axios.delete(`${server}/admin/youtube/${id}`,{ withCredentials: true });

    dispatch({
      type: "DELETE_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addProject = (title, githubUrl, liveUrl, image, description,detailsDescription, techStack,startdate,enddate) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PROJECT_REQUEST",
      });

      const { data } = await axios.post(
        `${server}/admin/project/add`,
        { title, githubUrl, liveUrl, image, description,detailsDescription, techStack,startdate,enddate },{ withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "ADD_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PROJECT_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });

    const { data } = await axios.delete(`${server}/admin/project/${id}`,{ withCredentials: true });

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};
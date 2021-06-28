(self["webpackChunkspoty"] = self["webpackChunkspoty"] || []).push([["src_componenet_SongsOfList_ShowSongs_js"],{

/***/ "./src/componenet/SongsOfList/ShowSongs.js":
/*!*************************************************!*\
  !*** ./src/componenet/SongsOfList/ShowSongs.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_useQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useQuery */ "./src/hooks/useQuery.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_ListContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/ListContext */ "./src/hooks/ListContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);







var ShowSongs = function ShowSongs(_ref) {
  var token = _ref.token;
  //const [selectedList, setSelectedList] = useContext(ListContext)
  //const{selectedList, setSelectedList} = useContext(ListContext);
  //const [songs, setSongs] = useState({name : "",images : [], tracks: {}});
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  var id = params.id;
  console.log('id', id);
  console.log('params', params);
  console.log('token', token); //setSongs(useUserPlayListsSongs(token,id));

  /* useEffect(()=>{setSongs(useUserPlayListsSongs(token,id));}
   ,[id]
     )*/

  var songs = (0,_hooks_useQuery__WEBPACK_IMPORTED_MODULE_1__.useUserPlayListsSongs)(token, id);
  console.log('respuestas', songs); //const { items } = songs;

  var listName = songs.name,
      listImage = songs.images,
      tracks = songs.tracks;
  var songsArray;

  if (songs && tracks) {
    //console.log('listImage',listImage[0])
    songsArray = tracks.items;
  }

  console.log('songs', songs);
  return {
    songs: songs
  } && Array.isArray(listImage) && listImage.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    id: "list-image",
    src: listImage[0].url,
    x: "0",
    y: "0",
    height: "168px",
    preserveAspectRatio: "xMidYMid slice",
    width: "168px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "List Name: ", listName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, Array.isArray(songsArray) ? songsArray.map(function (song) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: song.track.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: song.track.album.images[2].url
    }), song.track.name + ' - ' + song.track.artists[0].name);
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "The list has not songs"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Empty list");
};

ShowSongs.propTypes = {
  token: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  listId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (ShowSongs);

/***/ })

}]);
//# sourceMappingURL=src_componenet_SongsOfList_ShowSongs_js.bundle.js.map
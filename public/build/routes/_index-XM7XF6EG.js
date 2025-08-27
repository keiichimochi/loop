import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-AH2XVMRY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react3 = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

// node_modules/lucide-react/dist/esm/Icon.js
var import_react = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0, import_react.createElement)(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/chevron-left.js
var __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
var ChevronLeft = createLucideIcon("chevron-left", __iconNode);

// node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode2);

// node_modules/lucide-react/dist/esm/icons/chevrons-left.js
var __iconNode3 = [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
];
var ChevronsLeft = createLucideIcon("chevrons-left", __iconNode3);

// node_modules/lucide-react/dist/esm/icons/chevrons-right.js
var __iconNode4 = [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
];
var ChevronsRight = createLucideIcon("chevrons-right", __iconNode4);

// node_modules/lucide-react/dist/esm/icons/download.js
var __iconNode5 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
var Download = createLucideIcon("download", __iconNode5);

// node_modules/lucide-react/dist/esm/icons/loader-circle.js
var __iconNode6 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
var LoaderCircle = createLucideIcon("loader-circle", __iconNode6);

// node_modules/lucide-react/dist/esm/icons/pause.js
var __iconNode7 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
];
var Pause = createLucideIcon("pause", __iconNode7);

// node_modules/lucide-react/dist/esm/icons/play.js
var __iconNode8 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
var Play = createLucideIcon("play", __iconNode8);

// node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var __iconNode9 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
var RotateCcw = createLucideIcon("rotate-ccw", __iconNode9);

// node_modules/lucide-react/dist/esm/icons/upload.js
var __iconNode10 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
var Upload = createLucideIcon("upload", __iconNode10);

// app/utils/simpleVideoProcessor.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/simpleVideoProcessor.ts"
  );
  import.meta.hot.lastModified = "1756150747131.8647";
}
async function createSimpleLoop(videoFile, startTime, endTime) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Canvas context not available"));
      return;
    }
    video.onloadedmetadata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const mediaRecorder = new MediaRecorder(canvas.captureStream(), {
        mimeType: "video/webm;codecs=vp9"
      });
      const chunks = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        resolve(blob);
      };
      video.currentTime = startTime;
      video.play();
      mediaRecorder.start();
      const recordingDuration = (endTime - startTime) * 1e3;
      const drawFrame = () => {
        if (video.currentTime >= endTime) {
          mediaRecorder.stop();
          video.pause();
          return;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawFrame);
      };
      video.ontimeupdate = drawFrame;
      setTimeout(() => {
        if (mediaRecorder.state === "recording") {
          mediaRecorder.stop();
          video.pause();
        }
      }, recordingDuration + 1e3);
    };
    video.onerror = () => {
      reject(new Error("Video loading failed"));
    };
    video.src = URL.createObjectURL(videoFile);
    video.load();
  });
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1756150747254.4944";
}
var meta = () => {
  return [{
    title: "Video Loop Creator"
  }, {
    name: "description",
    content: "\u52D5\u753B\u3092\u30C8\u30EA\u30DF\u30F3\u30B0\u3057\u3066\u30EB\u30FC\u30D7\u52D5\u753B\u3092\u4F5C\u6210"
  }];
};
function Index() {
  _s();
  const videoRef = (0, import_react3.useRef)(null);
  const fileInputRef = (0, import_react3.useRef)(null);
  const [state, setState] = (0, import_react3.useState)({
    startTime: 0,
    endTime: 0,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
    videoFile: null,
    videoUrl: null,
    isProcessing: false,
    frameRate: 30,
    // デフォルト30fps
    startThumbnail: null,
    endThumbnail: null,
    isGeneratingThumbnails: false
  });
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setState((prev) => ({
        ...prev,
        videoFile: file,
        videoUrl: url,
        startTime: 0,
        endTime: 0,
        currentTime: 0,
        isPlaying: false
      }));
    }
  };
  const handleVideoMetadataLoaded = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      let estimatedFrameRate = 30;
      if (state.videoFile?.name.toLowerCase().includes("60fps") || state.videoFile?.name.toLowerCase().includes("60p")) {
        estimatedFrameRate = 60;
      } else if (state.videoFile?.name.toLowerCase().includes("24fps") || state.videoFile?.name.toLowerCase().includes("24p")) {
        estimatedFrameRate = 24;
      } else if (state.videoFile?.name.toLowerCase().includes("25fps") || state.videoFile?.name.toLowerCase().includes("25p")) {
        estimatedFrameRate = 25;
      }
      setState((prev) => ({
        ...prev,
        duration,
        endTime: duration,
        frameRate: estimatedFrameRate
      }));
    }
  };
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setState((prev) => ({
        ...prev,
        currentTime
      }));
      if (currentTime >= state.endTime && state.endTime > 0) {
        videoRef.current.currentTime = state.startTime;
      }
    }
  };
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (state.isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setState((prev) => ({
        ...prev,
        isPlaying: !prev.isPlaying
      }));
    }
  };
  const seekToTime = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setState((prev) => ({
        ...prev,
        currentTime: time
      }));
    }
  };
  const setStartTime = () => {
    setState((prev) => ({
      ...prev,
      startTime: prev.currentTime
    }));
  };
  const setEndTime = () => {
    setState((prev) => ({
      ...prev,
      endTime: prev.currentTime
    }));
  };
  const resetLoop = () => {
    seekToTime(state.startTime);
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor(seconds % 1 * 100);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}.${ms.toString().padStart(2, "0")}`;
  };
  const downloadLoop = async () => {
    if (!state.videoFile || state.isProcessing)
      return;
    try {
      setState((prev) => ({
        ...prev,
        isProcessing: true
      }));
      const trimmedBlob = await createSimpleLoop(state.videoFile, state.startTime, state.endTime);
      const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
      const filename = `loop-${timestamp}.webm`;
      downloadBlob(trimmedBlob, filename);
    } catch (error) {
      console.error("Error processing video:", error);
      alert("\u52D5\u753B\u306E\u51E6\u7406\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u30CA\u30EA\uFF01\u30D6\u30E9\u30A6\u30B6\u3067WebM\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u30CA\u30EA\u3002");
    } finally {
      setState((prev) => ({
        ...prev,
        isProcessing: false
      }));
    }
  };
  (0, import_react3.useEffect)(() => {
    const handleKeyPress = (event) => {
      if (!videoRef.current)
        return;
      switch (event.code) {
        case "Space":
          event.preventDefault();
          togglePlayPause();
          break;
        case "KeyI":
          event.preventDefault();
          setStartTime();
          break;
        case "KeyO":
          event.preventDefault();
          setEndTime();
          break;
        case "KeyR":
          event.preventDefault();
          resetLoop();
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (event.ctrlKey || event.metaKey) {
            seekToPreviousFrame();
          } else if (event.shiftKey) {
            seekToTime(Math.max(0, state.currentTime - 0.1));
          } else {
            seekToPreviousSecond();
          }
          break;
        case "ArrowRight":
          event.preventDefault();
          if (event.ctrlKey || event.metaKey) {
            seekToNextFrame();
          } else if (event.shiftKey) {
            seekToTime(Math.min(state.duration, state.currentTime + 0.1));
          } else {
            seekToNextSecond();
          }
          break;
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [state.currentTime, state.duration, togglePlayPause, setStartTime, setEndTime, resetLoop]);
  const jumpToLoop = () => {
    seekToTime(state.startTime);
  };
  const previewLoop = () => {
    setState((prev) => ({
      ...prev,
      endTime: prev.currentTime
    }));
    seekToTime(state.startTime);
    if (videoRef.current) {
      videoRef.current.play();
      setState((prev) => ({
        ...prev,
        isPlaying: true
      }));
    }
  };
  const getFrameDuration = () => {
    return 1 / state.frameRate;
  };
  const seekToNextFrame = () => {
    const frameDuration = getFrameDuration();
    const newTime = Math.min(state.duration, state.currentTime + frameDuration);
    seekToTime(newTime);
  };
  const seekToPreviousFrame = () => {
    const frameDuration = getFrameDuration();
    const newTime = Math.max(0, state.currentTime - frameDuration);
    seekToTime(newTime);
  };
  const seekToNextSecond = () => {
    const newTime = Math.min(state.duration, state.currentTime + 1);
    seekToTime(newTime);
  };
  const seekToPreviousSecond = () => {
    const newTime = Math.max(0, state.currentTime - 1);
    seekToTime(newTime);
  };
  const generateThumbnail = (time) => {
    return new Promise((resolve) => {
      if (!videoRef.current) {
        resolve("");
        return;
      }
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve("");
        return;
      }
      const video = videoRef.current;
      canvas.width = 160;
      canvas.height = 90;
      const originalTime = video.currentTime;
      video.currentTime = time;
      const onSeeked = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/jpeg", 0.8);
        video.currentTime = originalTime;
        video.removeEventListener("seeked", onSeeked);
        resolve(dataURL);
      };
      video.addEventListener("seeked", onSeeked);
    });
  };
  const updateThumbnails = async () => {
    if (!videoRef.current || !state.videoUrl)
      return;
    setState((prev) => ({
      ...prev,
      isGeneratingThumbnails: true
    }));
    try {
      const [startThumb, endThumb] = await Promise.all([generateThumbnail(state.startTime), generateThumbnail(state.endTime)]);
      setState((prev) => ({
        ...prev,
        startThumbnail: startThumb,
        endThumbnail: endThumb,
        isGeneratingThumbnails: false
      }));
    } catch (error) {
      console.error("Error generating thumbnails:", error);
      setState((prev) => ({
        ...prev,
        isGeneratingThumbnails: false
      }));
    }
  };
  (0, import_react3.useEffect)(() => {
    if (state.videoUrl && state.duration > 0) {
      updateThumbnails();
    }
  }, [state.startTime, state.endTime, state.videoUrl, state.duration]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Video Loop Creator" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 326,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-300 mb-4", children: "\u52D5\u753B\u3092\u30C8\u30EA\u30DF\u30F3\u30B0\u3057\u3066\u5B8C\u74A7\u306A\u30EB\u30FC\u30D7\u3092\u4F5C\u6210\u30CA\u30EA" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 329,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-800 rounded-lg p-4 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-400 text-sm mb-2", children: "\u30AD\u30FC\u30DC\u30FC\u30C9\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 333,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "Space" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 335,
              columnNumber: 20
            }, this),
            " \u518D\u751F/\u505C\u6B62"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 335,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "I" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 336,
              columnNumber: 20
            }, this),
            " \u958B\u59CB\u70B9\u8A2D\u5B9A"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 336,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "O" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 337,
              columnNumber: 20
            }, this),
            " \u7D42\u4E86\u70B9\u8A2D\u5B9A"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 337,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "R" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 338,
              columnNumber: 20
            }, this),
            " \u30EB\u30FC\u30D7\u5148\u982D\u3078"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 338,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "\u2190\u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 339,
              columnNumber: 20
            }, this),
            " 1\u79D2\u79FB\u52D5"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 339,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "Shift+\u2190\u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 340,
              columnNumber: 20
            }, this),
            " 0.1\u79D2\u79FB\u52D5"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 340,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "Ctrl+\u2190\u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 341,
              columnNumber: 20
            }, this),
            " 1\u30D5\u30EC\u30FC\u30E0\u79FB\u52D5"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("kbd", { className: "bg-slate-700 px-2 py-1 rounded", children: "Cmd+\u2190\u2192" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 342,
              columnNumber: 20
            }, this),
            " 1\u30D5\u30EC\u30FC\u30E0\u79FB\u52D5"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 342,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 334,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 332,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 325,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
      !state.videoUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-2 border-dashed border-slate-600 rounded-lg p-12 text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: fileInputRef, type: "file", accept: "video/*", onChange: handleFileUpload, className: "hidden" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 350,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "mx-auto mb-4 text-slate-400", size: 48 }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-300 mb-4", children: "\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3066\u304F\u3060\u3055\u3044\u30CA\u30EA" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 352,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => fileInputRef.current?.click(), className: "bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors", children: "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 353,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 349,
        columnNumber: 31
      }, this),
      state.videoUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-800 rounded-lg p-6 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { ref: videoRef, src: state.videoUrl, onLoadedMetadata: handleVideoMetadataLoaded, onTimeUpdate: handleTimeUpdate, className: "w-full rounded-lg", style: {
            maxHeight: "400px"
          } }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 361,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: !state.isPlaying && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: togglePlayPause, className: "bg-black bg-opacity-50 p-4 rounded-full pointer-events-auto hover:bg-opacity-70 transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "text-white", size: 32 }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 366,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 365,
            columnNumber: 40
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 364,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 360,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: togglePlayPause, className: "bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors", title: "\u518D\u751F/\u505C\u6B62 (Space)", children: state.isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { size: 20 }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 376,
              columnNumber: 40
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { size: 20 }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 376,
              columnNumber: 62
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 375,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: resetLoop, className: "bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors", title: "\u30EB\u30FC\u30D7\u5148\u982D\u3078 (R)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { size: 20 }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 379,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 378,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: previewLoop, className: "bg-yellow-600 hover:bg-yellow-700 px-4 py-3 rounded-full transition-colors font-medium", title: "\u958B\u59CB\u70B9\u304B\u3089\u73FE\u5728\u6642\u9593\u307E\u3067\u3092\u30EB\u30FC\u30D7\u518D\u751F", children: "\u73FE\u5728\u6642\u9593\u307E\u3067\u30EB\u30FC\u30D7\u518D\u751F" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 381,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: downloadLoop, disabled: state.isProcessing, className: "bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 p-3 rounded-full transition-colors", title: "\u30EB\u30FC\u30D7\u52D5\u753B\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9", children: state.isProcessing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { size: 20, className: "animate-spin" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 385,
              columnNumber: 43
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { size: 20 }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 385,
              columnNumber: 92
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 384,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 374,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center space-x-2 mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-slate-400 mr-2", children: "\u30D5\u30EC\u30FC\u30E0\u64CD\u4F5C:" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 393,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: seekToPreviousSecond, className: "bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors", title: "1\u79D2\u623B\u308B", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsLeft, { size: 16 }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 395,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 394,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: seekToPreviousFrame, className: "bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors", title: `1\u30D5\u30EC\u30FC\u30E0\u623B\u308B (${(1 / state.frameRate * 1e3).toFixed(1)}ms)`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { size: 16 }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 398,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 397,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: state.frameRate, onChange: (e) => setState((prev) => ({
                ...prev,
                frameRate: parseInt(e.target.value)
              })), className: "bg-slate-600 text-white text-xs rounded px-2 py-1 border border-slate-500 focus:border-blue-400 focus:outline-none min-w-[60px]", title: "\u30D5\u30EC\u30FC\u30E0\u30EC\u30FC\u30C8\u3092\u5909\u66F4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "24", children: "24fps" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 404,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "25", children: "25fps" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 405,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "30", children: "30fps" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 406,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "50", children: "50fps" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 407,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "60", children: "60fps" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 408,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "120", children: "120fps" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 409,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 400,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: seekToNextFrame, className: "bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors", title: `1\u30D5\u30EC\u30FC\u30E0\u9032\u3080 (${(1 / state.frameRate * 1e3).toFixed(1)}ms)`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { size: 16 }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 412,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 411,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: seekToNextSecond, className: "bg-slate-600 hover:bg-slate-500 p-1 rounded transition-colors", title: "1\u79D2\u9032\u3080", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronsRight, { size: 16 }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 415,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 414,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 392,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-xs text-slate-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "0:00" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 420,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatTime(state.duration) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 421,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 419,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-8 bg-slate-700 rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 rounded-lg overflow-hidden", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-500 h-full rounded-lg transition-all duration-100", style: {
                  width: `${state.currentTime / state.duration * 100}%`
                } }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 428,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 bg-green-400 bg-opacity-40 h-full border-l-2 border-r-2 border-green-400", style: {
                  left: `${state.startTime / state.duration * 100}%`,
                  width: `${(state.endTime - state.startTime) / state.duration * 100}%`
                } }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 433,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 bg-yellow-400 bg-opacity-20 h-full border-l-2 border-yellow-400", style: {
                  left: `${state.startTime / state.duration * 100}%`,
                  width: `${(state.currentTime - state.startTime) / state.duration * 100}%`
                } }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 439,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 426,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 w-3 h-8 bg-green-500 rounded cursor-pointer hover:bg-green-400 transition-colors flex items-center justify-center", style: {
                left: `${state.startTime / state.duration * 100}%`,
                transform: "translateX(-50%)"
              }, title: `\u958B\u59CB: ${formatTime(state.startTime)}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1 h-4 bg-white rounded" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 450,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 446,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 w-3 h-8 bg-red-500 rounded cursor-pointer hover:bg-red-400 transition-colors flex items-center justify-center", style: {
                left: `${state.endTime / state.duration * 100}%`,
                transform: "translateX(-50%)"
              }, title: `\u7D42\u4E86: ${formatTime(state.endTime)}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1 h-4 bg-white rounded" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 458,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 454,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 w-1 h-8 bg-blue-300 cursor-pointer", style: {
                left: `${state.currentTime / state.duration * 100}%`,
                transform: "translateX(-50%)"
              } }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 462,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 cursor-pointer", onClick: (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const time = x / rect.width * state.duration;
                seekToTime(time);
              } }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 468,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 424,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-4", children: Array.from({
              length: 11
            }, (_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute text-xs text-slate-500", style: {
              left: `${i * 10}%`,
              transform: "translateX(-50%)"
            }, children: formatTime(state.duration * i / 10) }, i, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 480,
              columnNumber: 30
            }, this)) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 477,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 390,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300", children: "\u958B\u59CB\u6642\u9593" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 492,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: state.isGeneratingThumbnails ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-18 bg-slate-600 rounded border-2 border-green-400 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin text-green-400", size: 20 }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 495,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 494,
                columnNumber: 55
              }, this) : state.startThumbnail ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: state.startThumbnail, alt: "\u958B\u59CB\u30D5\u30EC\u30FC\u30E0", className: "w-32 h-18 object-cover rounded border-2 border-green-400" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 496,
                columnNumber: 57
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-18 bg-slate-600 rounded border-2 border-green-400 flex items-center justify-center text-slate-400 text-xs", children: "\u30D7\u30EC\u30D3\u30E5\u30FC" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 496,
                columnNumber: 176
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 493,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono text-2xl text-green-400", children: formatTime(state.startTime) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 500,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: setStartTime, className: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors w-full", children: "\u73FE\u5728\u306E\u6642\u9593\u306B\u8A2D\u5B9A" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 501,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  startTime: Math.max(0, prev.startTime - 0.1)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "-0.1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 505,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  startTime: Math.max(0, prev.startTime - 0.01)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "-0.01s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 511,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  startTime: Math.min(prev.endTime, prev.startTime + 0.01)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "+0.01s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 517,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  startTime: Math.min(prev.endTime, prev.startTime + 0.1)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "+0.1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 523,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 504,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 491,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300", children: "\u73FE\u5728\u6642\u9593" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 533,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono text-2xl text-blue-400", children: formatTime(state.currentTime) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 534,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-500", children: [
                "/ ",
                formatTime(state.duration)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 535,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => seekToTime(Math.max(0, state.currentTime - 1)), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "-1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 537,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => seekToTime(Math.max(0, state.currentTime - 0.1)), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "-0.1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 540,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => seekToTime(Math.min(state.duration, state.currentTime + 0.1)), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "+0.1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 543,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => seekToTime(Math.min(state.duration, state.currentTime + 1)), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "+1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 546,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 536,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 532,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center space-y-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300", children: "\u7D42\u4E86\u6642\u9593" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 553,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: state.isGeneratingThumbnails ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-18 bg-slate-600 rounded border-2 border-red-400 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin text-red-400", size: 20 }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 556,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 555,
                columnNumber: 55
              }, this) : state.endThumbnail ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: state.endThumbnail, alt: "\u7D42\u4E86\u30D5\u30EC\u30FC\u30E0", className: "w-32 h-18 object-cover rounded border-2 border-red-400" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 557,
                columnNumber: 55
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-18 bg-slate-600 rounded border-2 border-red-400 flex items-center justify-center text-slate-400 text-xs", children: "\u30D7\u30EC\u30D3\u30E5\u30FC" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 557,
                columnNumber: 170
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 554,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-mono text-2xl text-red-400", children: formatTime(state.endTime) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 561,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: setEndTime, className: "bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors w-full", children: "\u73FE\u5728\u306E\u6642\u9593\u306B\u8A2D\u5B9A" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 562,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  endTime: Math.max(prev.startTime, prev.endTime - 0.1)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "-0.1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 566,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  endTime: Math.max(prev.startTime, prev.endTime - 0.01)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "-0.01s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 572,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  endTime: Math.min(prev.duration, prev.endTime + 0.01)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "+0.01s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 578,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setState((prev) => ({
                  ...prev,
                  endTime: Math.min(prev.duration, prev.endTime + 0.1)
                })), className: "bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs", children: "+0.1s" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 584,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 565,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 552,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 490,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-700 rounded-lg p-6 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300 text-lg font-medium text-center", children: "\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u8A2D\u5B9A" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 596,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-400 text-sm mb-2", children: "\u203B \u51FA\u529B\u5F62\u5F0F\uFF1AWebM\uFF08\u30D6\u30E9\u30A6\u30B6\u5185\u51E6\u7406\u306E\u305F\u3081\uFF09" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 599,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 598,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: downloadLoop, disabled: state.isProcessing || !state.videoFile || state.endTime <= state.startTime, className: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-500 disabled:to-slate-500 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 mx-auto", children: state.isProcessing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { size: 20, className: "animate-spin" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 607,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u51E6\u7406\u4E2D..." }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 608,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 606,
                columnNumber: 45
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { size: 20 }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 610,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u30EB\u30FC\u30D7\u52D5\u753B\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 611,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 609,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 605,
                columnNumber: 21
              }, this),
              !state.isProcessing && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-400 text-sm mt-2", children: "\u30D6\u30E9\u30A6\u30B6\u5185\u3067\u52D5\u753B\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u6570\u79D2\u304B\u304B\u308A\u307E\u3059\u30CA\u30EA" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 615,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 604,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 595,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300 mb-2", children: "\u8A2D\u5B9A\u30EB\u30FC\u30D7\u6642\u9593" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 624,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-mono text-green-400", children: formatTime(state.endTime - state.startTime) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 625,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 623,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300 mb-2", children: "\u73FE\u5728\u6642\u9593\u307E\u3067\u306E\u30EB\u30FC\u30D7" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 631,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-mono text-yellow-400", children: formatTime(state.currentTime - state.startTime) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 632,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 630,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300 mb-2", children: "\u5143\u52D5\u753B\u304B\u3089" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 638,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg text-slate-100", children: state.duration > 0 ? `${((state.endTime - state.startTime) / state.duration * 100).toFixed(1)}%` : "0%" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 639,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 637,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-slate-700 rounded-lg p-4 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-slate-300 mb-2", children: "\u63A8\u5B9A\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 645,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg text-slate-100", children: state.videoFile ? `~${(state.videoFile.size * (state.endTime - state.startTime) / state.duration / (1024 * 1024)).toFixed(1)}MB` : "--MB" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 646,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 644,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 622,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setState({
              startTime: 0,
              endTime: 0,
              duration: 0,
              currentTime: 0,
              isPlaying: false,
              videoFile: null,
              videoUrl: null,
              isProcessing: false,
              frameRate: 30,
              startThumbnail: null,
              endThumbnail: null,
              isGeneratingThumbnails: false
            });
            if (fileInputRef.current)
              fileInputRef.current.value = "";
          }, className: "bg-slate-600 hover:bg-slate-500 px-6 py-3 rounded-lg transition-colors", children: "\u65B0\u3057\u3044\u52D5\u753B\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 654,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 653,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 372,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 359,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 347,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 324,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 323,
    columnNumber: 10
  }, this);
}
_s(Index, "SuPU5eI9SHwgczqReQzRXnK0wRo=");
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-left.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevrons-left.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevrons-right.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/download.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/loader-circle.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/pause.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/play.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/rotate-ccw.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/upload.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.541.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/routes/_index-XM7XF6EG.js.map

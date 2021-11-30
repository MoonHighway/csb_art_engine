const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;
const namePrefix = "Crypto Ski Bums";
const description =
  "Crypto Ski Bums is a community of rad individuals who prioritize ripping or shredding the gnar.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "CSB",
  seller_fee_basis_points: 500, // 5% after market sales
  external_url: "https://crypto-ski-bums.netlify.app/",
  creators: [
    {
      address: "7ztELa9nnpkismFkX8Fnmgi2sm8xnvhB6ahsR9iEiTVB",
      share: 50,
    },
    {
      address: "BR6cpaonvRzuvwpDFcWScH1CDMxBtjU34GaVNvXhUBBc",
      share: 50,
    },
  ],
};

const layerConfigurations = [
  {
    growEditionSizeTo: 50,
    layersOrder: [{ name: "Mountain" }, { name: "Skier" }, { name: "Quiver" }],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

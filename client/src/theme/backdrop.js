"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
// ----------------------------------------------------------------------
function Backdrop(theme) {
    const varLow = (0, styles_1.alpha)(theme.palette.primary.main, 0.1);
    const varHigh = (0, styles_1.alpha)(theme.palette.primary.main, 0.05);
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: [
                        `rgb(22,28,36)`,
                        `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
                        `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`
                    ],
                    '&.MuiBackdrop-invisible': {
                        background: 'transparent'
                    }
                }
            }
        }
    };
}
exports.default = Backdrop;

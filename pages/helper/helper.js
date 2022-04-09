import { button_primary, name_color } from "../palette";

export const buttonStyle = {
  width: "2rem",
  height: "1.9rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "0.5rem",
  backgroundColor: "white",
};
export const iconStyle = {
  marginLeft: "0.45rem",
  color: "black",
};
export const textStyle = {
  fontSize: "1.35rem",
  marginBottom: "0",
  fontWeight: "800",
  marginLeft: "0.5rem",
  color: name_color,
};
export const labelStyle = {
  width: "1rem",
  height: "2.5rem",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};
export const defaultFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const dimmerStyle = {
  ...defaultFlex,
  flexDirection: "column",
};
export const cardContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
};
export const buttonContainerStyle = {
  position: "absolute",
  right: "0",
  marginRight: "2rem",
  display: "flex",
};
export const headerContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "2rem",
};
export const headerContainerTextStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  textTransform: "capitalize",
  marginBottom: "0px",
};
export const popupStyle = {
  color: "white",
  overflowWrap: "break-words",
  width: "12rem",
  textAlign: "center",
};
export const floatingButtonStyle = {
  position: "fixed",
  right: "5%",
  bottom: "10%",
  zIndex: "1",
  padding: "1.5rem",
  backgroundColor: button_primary,
  color: "white",
};

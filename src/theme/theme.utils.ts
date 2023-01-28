export const utils = {
  // padding
  pa: (value: any) => ({ padding: value }),
  pt: (value: any) => ({ paddingTop: value }),
  pr: (value: any) => ({ paddingRight: value }),
  pb: (value: any) => ({ paddingBottom: value }),
  pl: (value: any) => ({ paddingLeft: value }),
  px: (value: any) => ({ paddingLeft: value, paddingRight: value }),
  py: (value: any) => ({ paddingTop: value, paddingBottom: value }),
  // margin
  ma: (value: any) => ({ margin: value }),
  mt: (value: any) => ({ marginTop: value }),
  mr: (value: any) => ({ marginRight: value }),
  mb: (value: any) => ({ marginBottom: value }),
  ml: (value: any) => ({ marginLeft: value }),
  mx: (value: any) => ({ marginLeft: value, marginRight: value }),
  my: (value: any) => ({ marginTop: value, marginBottom: value }),
  // colors
  bg: (value: any) => ({ backgroundColor: value }),
};

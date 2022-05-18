import { toDisplayString as _toDisplayString } from 'vue'

export default {
  props: { label: String },
  setup(props) {
    console.log(props.label)

    // https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiJ7eyBsYWJlbCB9fSIsInNzciI6ZmFsc2UsIm9wdGlvbnMiOnsiaW5saW5lIjp0cnVlfX0=
    // {{ label }}

    // Generated code:
    return (_ctx, _cache) => {
      return _toDisplayString(_ctx.label)
    }
  },
}

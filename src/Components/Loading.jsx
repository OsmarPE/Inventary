import ContentLoader from "react-content-loader"

const Loading = (props) => (
    <ContentLoader 
    speed={2}
    width={'100%'}
    height={400}
    viewBox="0 0 1000 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="15" rx="0" ry="0" width="100%" height="64" /> 
    <rect x="12" y="97" rx="0" ry="0" width="100%" height="64" /> 
    <rect x="14" y="143" rx="0" ry="0" width="100%" height="64" /> 
    <rect x="16" y="184" rx="0" ry="0" width="100%" height="64" /> 
    <rect x="16" y="229" rx="0" ry="0" width="100%" height="64" /> 
    <rect x="16" y="275" rx="0" ry="0" width="100%" height="64" />
    <rect x="16" y="275" rx="0" ry="0" width="100%" height="64" />
    <rect x="16" y="275" rx="0" ry="0" width="100%" height="64" />
  </ContentLoader>
)

export default Loading
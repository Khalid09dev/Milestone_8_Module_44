
const Link = ({route}) => {
    return (
        <li><a href={`route.path`}>{route.name}</a></li>
    );
};

// Link.propTypes = {
//     route: propTypes.object
// }
export default Link;
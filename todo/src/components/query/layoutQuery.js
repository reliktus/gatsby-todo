import { graphql, useStaticQuery } from 'gatsby';
export default () => {
	return useStaticQuery(
		graphql`
			{
				allFile(filter: { relativeDirectory: { eq: "pages" }, name: { ne: "404" } }) {
					edges {
						node {
							name
						}
					}
				}
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);
};

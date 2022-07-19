import React, { Component } from "react";
import footerImage from "/src/img/vader_footer.jpeg"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center footerImage">
		<div className="footerContainer">
		<img src={footerImage} style={{height: "200px"}}/>
		<p className="footerLegal centeredFooter">
			Made with<i className="fa fa-heart text-danger" />by{" "}
			<a href="http://www.hurtadojose.com">Jose Hurtado</a></p>
		</div>
	</footer>
);

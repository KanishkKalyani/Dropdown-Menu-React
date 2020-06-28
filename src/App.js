import React from "react";
import "./App.css";
import NavBar from "./NavBar.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			level1: ["Local Disc (C:)", "Local Disc (D:)", "Local Disc (E:)"],
			open1: [false, false, false],

			level2: [
				["Program Files", "Users", "Windows"],
				["Personals", "Projects", "Office"],
				["Pictures", "Documents", "Study Materials"],
			],
			open2: [
				[false, false, false],
				[false, false, false],
				[false, false, false],
			],
		};
	}

	changeState = (level, array) => {
		if (level === "1") {
			this.setState({
				open1: array,
			});
		}
		if (level === "2") {
			this.setState({
				open2: array,
			});
		}
	};

	render() {
		return (
			<div className="container">
				<div className="menu-wrapper">
					<NavBar
						changeState={this.changeState}
						prop={this.state}
						level="1"
						data="0">
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="0"
							data="0">
							<li>Windows NT</li>
							<li>Windows Mail</li>
							<li>Windows Photo Viewer</li>
						</NavBar>
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="0"
							data="1">
							<li>Nishant</li>
							<li>Siddharth</li>
						</NavBar>
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="0"
							data="2">
							<li>Boot</li>
							<li>File Manager</li>
						</NavBar>
					</NavBar>
					<NavBar
						changeState={this.changeState}
						prop={this.state}
						level="1"
						data="1">
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="1"
							data="0">
							<li>MyPhoto.png</li>
							<li>Resume.pdf</li>
						</NavBar>
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="1"
							data="1">
							<li>Calculator Application</li>
							<li>Notes Application</li>
						</NavBar>
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="1"
							data="2">
							<li>Reports.docx</li>
						</NavBar>
					</NavBar>
					<NavBar
						changeState={this.changeState}
						prop={this.state}
						level="1"
						data="2">
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="2"
							data="0">
							<li>Cat.png</li>
						</NavBar>
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="2"
							data="1">
							<li>ProgressReport.docx</li>
							<li>DesignDoc.pdf</li>
						</NavBar>
						<NavBar
							changeState={this.changeState}
							prop={this.state}
							level="2"
							index="2"
							data="2">
							<li>HTML.html</li>
							<li>Css.pdf</li>
							<li>JS.pdf</li>
						</NavBar>
					</NavBar>
				</div>
			</div>
		);
	}
}

export default App;

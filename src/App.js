
import './App.css';
import {PowerBIEmbed} from 'powerbi-client-react'
import {models} from 'powerbi-client'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual and qna
		id: '112a6086-ac6b-4273-bc18-cdfd9a936e41',
		embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=112a6086-ac6b-4273-bc18-cdfd9a936e41&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d',
		accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNmNhMzRhZTEtNDY2Zi00NGJjLWE3YWEtMGFjNWE3OGM2MWIxLyIsImlhdCI6MTYxOTY0NzM1MSwibmJmIjoxNjE5NjQ3MzUxLCJleHAiOjE2MTk2NTEyNTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFhcUVLa1k1ZkZTYTNJelZ4N2Foc3lhbVpKU2pGVWFxdHpuaFBBdC9wOW9ManB6VUZqcHZIOFhNZDVjRlhSbXE1IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiSklNRU5FWiBBUkFHT04iLCJnaXZlbl9uYW1lIjoiTUFSVElOIEpPU0UiLCJpcGFkZHIiOiIxNzkuMTMuMTk0Ljc3IiwibmFtZSI6Ik1BUlRJTiBKT1NFIEpJTUVORVogQVJBR09OIiwib2lkIjoiOWZlNTk3ZmYtMWQ3Ni00NTdjLTg5ZTAtMTQ3YzE5MzM5ZDg4IiwicHVpZCI6IjEwMDMzRkZGQThEQjYwQjkiLCJyaCI6IjAuQVRRQTRVcWpiRzlHdkVTbnFnckZwNHhoc1E4QkhJZGhYckZQZzZ5WVlRcC1rUkEwQU9zLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InhZT2NmSjBvbEREemZMTFBEUUh6dFEyNHdsb3VDYkd6QUxWVDhNajM2ck0iLCJ0aWQiOiI2Y2EzNGFlMS00NjZmLTQ0YmMtYTdhYS0wYWM1YTc4YzYxYjEiLCJ1bmlxdWVfbmFtZSI6Im1hcnRpbmotamltZW5lemFAdW5pbGlicmUuZWR1LmNvIiwidXBuIjoibWFydGluai1qaW1lbmV6YUB1bmlsaWJyZS5lZHUuY28iLCJ1dGkiOiJnLTVfaWVhdWgwYXk2RTVvRm1seEFRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.ABvE7EOtzCGUazrazy8QfrycAWxwh4mN-BwnFIRYPFKoHaN8EmK0xK_RNFTxbp1ftGOsOw3W5BJdFIpPFr506ql2BhXfu0NMbyij_kVZLRYekk1fyLO72a8ZLTVTrDVAh_2A-EdjtVTcSt4PSS_jGzYn4ActoPjpGyPgNlYmKy3MpiGRLN-6y4ShnQq1C7tvhe1HElbAOVQLQQORYjKRt0FFbLMDL6Y1ao6y_eLbmna8rDHZQi1SkGsuuu0bcdFHR3LNUPnnwtnCValM9avKi9PTLfYa57-is-AhvJWRxJ0zSR0GvBKxQxMeyzo3eUQlz1891dAvvctW344KJ7xOFw',
		tokenType: models.TokenType.Aad,
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = { 
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}]
		])
	}
		
	cssClassName = { "report-power-bi" }

	getEmbeddedComponent = { (embeddedReport) => {
		window.report = embeddedReport ;
	}}
/>
      </header>
    </div>
  );
}

export default App;

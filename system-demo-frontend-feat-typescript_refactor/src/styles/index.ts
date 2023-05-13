import { CSSProperties } from 'react'

export const BannerStyle: CSSProperties = {
  backgroundColor: 'rgb(44, 44, 44)',
  width: 1480,
  height: 52,
  minWidth: 217,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 36,
}

export const SystemTitle: CSSProperties = {
  fontSize: 24,
  fontWeight: 500,
  fontFamily: 'PingFang SC',
  textAlign: 'left',
  width: 217,
  color: 'rgb(255, 255, 255)',
}

export const SubSystemTitle: CSSProperties = {
  fontFamily: 'PingFang SC',
  fontWeight: 350,
  fontSize: 16,
  color: 'rgb(255, 255, 255)',
  width: 223,
}

export const BodyStyle: CSSProperties = {
  display: 'flex',
  paddingTop: 14,
}

export const ListStyle: CSSProperties = {
  border: '1px solid',
  borderColor: 'rgb(44, 44, 44)',
  fontSize:12,
}

export const ListHeader: CSSProperties = {
  width: 280,
  minWidth: 280,
  height: 72,
  minHeight: 72,
  backgroundColor: 'rgb(44, 44, 44)',
  color: 'rgb(255, 255, 255)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 30,
  ...SubSystemTitle,
}

export const CurrentSelection: CSSProperties = {
  border: '1px solid',
  backgroundColor: 'rgb(44, 44, 44)',
  borderColor: 'rgb(44, 44, 44)',
  marginLeft: 10,
  height: 38,
  width: 865,
  display: 'flex',
}

// “当前图像”
export const Menu: CSSProperties = {
  paddingLeft: 10,
  paddingTop: 8,
  color: 'rgb(255, 255, 255)',
  flexDirection: 'row',
  position:'absolute'
}

// 选择的数据的样式
export const Contents: CSSProperties = {
  paddingLeft: 100,
  paddingTop: 13,
  fontSize:12,
  color: 'rgb(255, 255, 255)',
  flexDirection: 'row',
  position:'absolute'
}

// “保存批注”
export const Save: CSSProperties = {
  marginLeft:390,
  paddingTop: 13,
  width: 250,
  color: 'rgb(255, 255, 255)',
  position:'absolute',
  fontSize:8
}

// “导出所有结果”
export const Export: CSSProperties = {
  marginLeft:510,
  paddingTop: 13,
  width: 250,
  color: 'rgb(255, 255, 255)',
  position:'absolute',
  fontSize:8
}

export const RightBox: CSSProperties = {
  marginLeft: 8,
  height: 680,
  width: 290,
  display: 'flex',
}

export const GeneralAnalysis: CSSProperties = {
  border: '1px solid',
  backgroundColor: 'rgb(44, 44, 44)',
  borderColor: 'GrayText',
  height: 170,
  width: 285,
  position:'absolute',
  color:'rgb(255, 255, 255)',
  paddingLeft:10,
  fontSize:14
}
export const BrightCricleStyle:CSSProperties={
  position:"absolute",
  top:0
}

export const PercentageStyle:CSSProperties={
  position:"absolute",
  top:20,
  left:165,
  color:'#FFC125',
  fontSize:30
}

export const GeneralAnalysis1: CSSProperties = {
  paddingTop:10,
  position:"absolute"
}

export const GeneralAnalysis2: CSSProperties = {
  paddingTop:15,
  position:'absolute',
  top:90
}

export const GeneralAnalysis3: CSSProperties = {
  paddingTop:3,
  paddingLeft:150,
  fontSize:30,
  position:'absolute',
  top:110,
  left:30
}

export const GeneralAnalysis4: CSSProperties = {
  paddingTop:3,
  paddingLeft:150,
  fontSize:35,
  position:'absolute',
  color:'orange',
  top:12
}

export const AIAnalysis: CSSProperties = {
  display:'flex',
  flexDirection:'column',
  border: '1px solid',
  position:'absolute',
  backgroundColor: 'rgb(44, 44, 44)',
  borderColor:'GrayText',
  width:285,
  height:140,
  marginTop:180,
  paddingLeft:10,
  paddingTop:10,
  fontSize:14,
}

export const AIAnalysisTop: CSSProperties = {
  display:'flex',
  flexDirection:'row'
}

export const AIAnalysisTitle: CSSProperties = {
  color:'rgb(255, 255, 255)',
}

export const AnalysisAction: CSSProperties = {
  color:'rgb(255, 255, 255)',
  marginLeft:65,
  display:'flex',
  flexDirection:'row'
}

export const AnalysisActionAccept1: CSSProperties = {
  color:'rgb(255, 255, 255)',
  fontSize:13
}

export const AnalysisActionAccept2: CSSProperties = {
  color:'rgb(0,205,102)',
  fontSize:13
}

export const AnalysisActionModify1: CSSProperties = {
  color:'rgb(255, 255, 255)',
  marginLeft:20,
  fontSize:13
}

export const AnalysisActionModify2: CSSProperties = {
  color:'rgb(0,205,102)',
  marginLeft:20,
  fontSize:13
}

export const AIDetailAnalysis: CSSProperties = {
  color:'white',
  border: '1px solid',
  backgroundColor: 'rgb(44, 44, 44)',
  borderColor:'GrayText',
  marginLeft:5,
  marginRight:10,
  marginTop:15,
  height:80,
  paddingLeft:5,
  paddingRight:5,
  paddingTop:5,
  fontSize:10,
}

export const ListHeader2: CSSProperties = {
  color:'white',
  paddingLeft:10,
  display:'flex',
  flexDirection:'row'
}

export const ListStyle2: CSSProperties = {
  color:'white',
  height:35,
  marginLeft:0,
  border: '1px solid',
  backgroundColor: 'rgb(44, 44, 44)',
  borderColor:'GrayText',
  paddingLeft:0,
  paddingTop:8
}

export const ListBox: CSSProperties = {
  border: '1px solid',
  borderColor:'GrayText',
  position:'absolute',
  marginTop:340,
  width:295
 }

export const MiddleBox: CSSProperties = {
  display:'flex',
  flexDirection:'column'
}

export const LeftBox: CSSProperties = {
  border: '1px solid',
  borderColor:'rgb(44, 44, 44)',
  backgroundColor: 'rgb(44, 44, 44)',
  width:45,
  height:600,
  paddingLeft:10,
  marginLeft:10,
  marginTop:15,
  display:"flex",
  flexDirection:"column",
}

export const PictureBox: CSSProperties = {
 
}

export const BottomBox: CSSProperties = {
 display:'flex',
 flexDirection:'row'
}

export const Picture: CSSProperties = {
 marginLeft:10,
 marginTop:15,
 width:800,
 height:600
}
export const ToolBoxStyle: CSSProperties={
  marginTop:40
}

export const ListIconStyle: CSSProperties={
  marginLeft:120
}

export const InformationIconStyle: CSSProperties={
  marginLeft:10
}

export const AcceptIconStyle: CSSProperties={
  marginLeft:5
}

export const SaveIconStyle:CSSProperties={
  position:'absolute',
  marginLeft:450,
  marginTop:10
}

export const ExportIconStyle:CSSProperties={
  position:'absolute',
  marginLeft:590,
  marginTop:11
}

export const BiggerIconStyle:CSSProperties={
  position:'absolute',
  marginLeft:780,
  marginTop:11
}

export const SmallerIconStyle:CSSProperties={
  position:'absolute',
  marginLeft:820,
  marginTop:11
}

export const ProportionStyle:CSSProperties={
  border: '1px solid',
  backgroundColor: '#363636',
  borderColor: 'rgb(44, 44, 44)',
  marginLeft:690,
  marginTop:6,
  height: 20,
  width:48,
  paddingLeft:16,
  paddingTop:2,
  position:'absolute',
  display: 'flex',
  color:'white',
  fontSize:4
}

export const SearchingIconStyle:CSSProperties={
  marginLeft:888
}

export const MailIconStyle:CSSProperties={
  marginLeft:12
}

export const ThreePointsIconStyle:CSSProperties={
  marginLeft:12
}

export const ManIconStyle:CSSProperties={
  marginLeft:12
}
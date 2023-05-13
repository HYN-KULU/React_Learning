import useTheme from '../../hooks/useTheme'
import {
  BannerStyle,
  SystemTitle,
  SubSystemTitle,
  BodyStyle,
  ListHeader,
  ListStyle,
  CurrentSelection,
  Menu,
  Contents,
  Save,
  Export,
  RightBox,
  GeneralAnalysis,
  GeneralAnalysis1,
  GeneralAnalysis2,
  GeneralAnalysis3,
  GeneralAnalysis4,
  AIAnalysis,
  AIAnalysisTop,
  AIAnalysisTitle,
  AnalysisAction,
  AIDetailAnalysis,
  AnalysisActionAccept1,
  AnalysisActionAccept2,
  AnalysisActionModify1,
  AnalysisActionModify2,
  ListHeader2,
  ListStyle2,
  ListBox,
  MiddleBox,
  LeftBox,
  PictureBox,
  BottomBox,
  Picture,
  BrightCricleStyle,
  PercentageStyle,
  ToolBoxStyle,
  ListIconStyle,
  InformationIconStyle,
  AcceptIconStyle,
  SaveIconStyle,
  ExportIconStyle,
  BiggerIconStyle,
  SmallerIconStyle,
  ProportionStyle,
  MailIconStyle,
  ManIconStyle,
  SearchingIconStyle,
  ThreePointsIconStyle,
} from '../../styles'
import InputSearch from '../../components/inputSearch'
import {
  ArrowIcon,
  PendingIcon,
  FinishedIcon,
  MiddleDangerIcon,
  HighDangerIcon,
  HealthyIcon,
  BrightCircle,
  ToolBox1Icon,
  ToolBox2Icon,
  ToolBox3Icon,
  ToolBox4Icon,
  ToolBox5Icon,
  ToolBox6Icon,
  ToolBox7Icon,
  ListIcon,
  InformationIcon,
  AcceptIcon1,
  AcceptIcon2,
  EditIcon1,
  EditIcon2,
  SaveIcon,
  ExportIcon,
  BiggerIcon,
  SmallerIcon,
  MailIcon,
  ManIcon,
  ThreePointsIcon,
  SearchingIcon,
} from '../../icons'
import { useQuery } from 'react-query'
import { getRecords, getReports } from '../../services/records'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { Record, Report } from '../../services/records'

const columnsTable1 = [
  { title: '姓名', dataIndex: 'name' },
  { title: '病历号', dataIndex: 'caseNumber' },
  { title: '检查号', dataIndex: 'checkNumber' },
  { title: '报告日期', dataIndex: 'reportDate' },
  { title: '方式', dataIndex: 'checkType' },
  { title: '报告描述', dataIndex: 'resportDesc' },
  {
    title: '状态',
    dataIndex: 'status',
    render: (_text: any, record: any, _index: any) =>
      record.status === 'finished' ? <FinishedIcon /> : <PendingIcon />,
  },
]
const columnsTable2 = [
  { title: '序号', dataIndex: 'order' },
  { title: '数据', dataIndex: 'data' },
  { title: '检查号', dataIndex: 'checknumber' },
  { title: '报告日期', dataIndex: 'date' },
  { title: '方式', dataIndex: 'way' },
  {
    title: '报告描述',
    dataIndex: 'report',
    render: (_text: any, record: any, _index: any) => {
      if (record.report === '中危') {
        return (
          <div>
            <MiddleDangerIcon />
            &nbsp;中危
          </div>
        )
      }
      if (record.report === '高危') {
        return (
          <div>
            <HighDangerIcon />
            &nbsp;高危
          </div>
        )
      }
      if (record.report === '健康') {
        return (
          <div>
            <HealthyIcon />
            &nbsp;健康
          </div>
        )
      }
    },
  },
]

const TopBar = (props: any) => {
  const { selectedData } = props
  return (
    <div>
      <div style={CurrentSelection}>
        <div style={Menu}>当前图片</div>
        <div style={Contents}>
          {selectedData.name} &nbsp;&nbsp;&nbsp;{selectedData.caseNumber}
          &nbsp;&nbsp;&nbsp;
          {selectedData.checkNumber} &nbsp;&nbsp;&nbsp;
          {selectedData.reportDate}&nbsp;&nbsp;&nbsp;
          {selectedData.checkType} &nbsp;&nbsp;&nbsp;
          {selectedData.resportDesc}
        </div>
        <div style={Save}>保存标注</div>
        <div style={SaveIconStyle}>
          <SaveIcon />
        </div>
        <div style={Export}>导出所有结果</div>
        <div style={ExportIconStyle}>
          <ExportIcon />
        </div>
        <div style={ProportionStyle}>100%</div>
        <div style={BiggerIconStyle}>
          <BiggerIcon />
        </div>
        <div style={SmallerIconStyle}>
          <SmallerIcon />
        </div>
      </div>
    </div>
  )
}

const GeneralAnalysisComponent = () => {
  return (
    <div style={GeneralAnalysis}>
      <div style={GeneralAnalysis1}>患病概率分析</div>
      <div style={GeneralAnalysis4}>
        {' '}
        <div style={BrightCricleStyle}>
          {' '}
          <BrightCircle />
        </div>
        <div style={PercentageStyle}> 56%</div>
      </div>
      <div style={GeneralAnalysis2}>可疑病灶</div>

      <div style={GeneralAnalysis3}>4个</div>
    </div>
  )
}

const AcceptIconFunc = (props: any) => {
  if (props.isAcceptActive === true) {
    return <AcceptIcon2 />
  } else {
    return <AcceptIcon1 />
  }
}

const EditIconFunc = (props: any) => {
  if (props.isModifyActive === true) {
    return <EditIcon2 />
  } else {
    return <EditIcon1 />
  }
}

const AIAnalysisComponent = () => {
  const [isAcceptActive, setAccept] = useState<boolean>(false)
  const [isModifyActive, setModify] = useState<boolean>(false)
  return (
    <div style={AIAnalysis}>
      <div style={AIAnalysisTop}>
        <div style={AIAnalysisTitle}>AI诊断信息</div>
        <div style={InformationIconStyle}>
          <InformationIcon />
        </div>
        <div style={AnalysisAction}>
          <div
            style={
              isAcceptActive ? AnalysisActionAccept2 : AnalysisActionAccept1
            }
            onClick={() => {
              setAccept(true)
              setModify(false)
            }}>
            采纳
          </div>
          <div style={AcceptIconStyle}>
            <AcceptIconFunc isAcceptActive={isAcceptActive} />
          </div>
          <div
            style={
              isModifyActive ? AnalysisActionModify2 : AnalysisActionModify1
            }
            onClick={() => {
              setAccept(false)
              setModify(true)
            }}>
            修改
          </div>
          <div style={AcceptIconStyle}>
            <EditIconFunc isModifyActive={isModifyActive} />
          </div>
        </div>
      </div>
      <div style={AIDetailAnalysis}>
        右侧下叶基底段见一非实性/磨玻璃结节（位置信息见左侧loc标记）
        密度-739.39Hu,最长径约9.7mm,体积54.81mm,恶性概率56%
      </div>
    </div>
  )
}

const IntelegentPredictionComponent = () => {
  const { isLoading, data } = useQuery('reports', () => getReports())
  const [dataSource, setDataSource] = useState<Report[]>([])
  useEffect(() => {
    setDataSource(data?.data.reports || [])
  }, [data])
  return (
    <div style={ListBox}>
      <div style={ListStyle2}>
        <div style={ListHeader2}>
          <div>智能预测结节列表</div>
          <div style={ListIconStyle}>
            <ListIcon />
          </div>
        </div>
        <Table
          dataSource={dataSource}
          columns={columnsTable2}
          loading={isLoading}
          pagination={false}
          style={{
            width: 300,
            fontSize: 0.1,
          }}
        />
      </div>
    </div>
  )
}

const PictureBoxComponent = () => {
  return (
    <div style={PictureBox}>
      {' '}
      <img
        src="https://6b75-kulu-9g08tpms523e5824-1309004817.tcb.qcloud.la/demopicture.jpg?sign=635de9d9dd6a011ad2eeffdc97418892&t=1651839847"
        alt=""
        style={Picture}
      />
    </div>
  )
}

const Index = () => {
  const theme = useTheme()
  const { isLoading, data } = useQuery('records', () => getRecords())
  const [searchName, setSearchName] = useState<string>()
  const [dataSource, setDataSource] = useState<Record[]>([])
  const [selectedData, setSelectedData] = useState<Record>({
    name: '',
    caseNumber: '',
    checkNumber: '',
    reportDate: '',
    checkType: '',
    resportDesc: '',
    status: '',
  })
  useEffect(() => {
    setDataSource(data?.data.records || [])
  }, [data])

  const handleSearch = () => {
    const allRecords = data?.data.records || []
    if (searchName) {
      setDataSource(allRecords.filter((record) => record.name === searchName))
    } else {
      setDataSource(allRecords)
    }
  }

  return (
    <div style={{ ...theme }}>
      <div style={BannerStyle}>
        <div style={SystemTitle}>Health X 禾飒智能</div>
        <div style={SubSystemTitle}>胎盘影像智能标注系统</div>
        <div style={SearchingIconStyle}>
          <SearchingIcon />
        </div>
        <div style={MailIconStyle}>
          <MailIcon />
        </div>
        <div style={ManIconStyle}>
          <ManIcon />
        </div>
        <div style={ThreePointsIconStyle}>
          <ThreePointsIcon />
        </div>
      </div>
      <div style={BodyStyle}>
        <div style={ListStyle}>
          <div style={ListHeader}>
            <div>检测图像列表</div>
            <InputSearch
              onChange={(e) => {
                setSearchName(e.target.value)
              }}
              onSearch={handleSearch}
            />
            <ArrowIcon />
          </div>
          <Table
            dataSource={dataSource}
            columns={columnsTable1}
            loading={isLoading}
            style={{
              width: 280,
              fontSize: 8,
              paddingLeft: 12,
            }}
            pagination={false}
            onRow={(record) => {
              return {
                onClick: (event) => {
                  setSelectedData(record)
                  console.log(selectedData)
                }, // 点击行
                onMouseEnter: (event) => {}, // 鼠标移入行
              }
            }}
          />
        </div>
        <div style={MiddleBox}>
          <TopBar selectedData={selectedData} />
          <div style={BottomBox}>
            <div style={LeftBox}>
              <div style={ToolBoxStyle}>
                <ToolBox1Icon />
              </div>
              <div style={ToolBoxStyle}>
                <ToolBox2Icon />
              </div>
              <div style={ToolBoxStyle}>
                <ToolBox3Icon />
              </div>
              <div style={ToolBoxStyle}>
                <ToolBox4Icon />
              </div>
              <div style={ToolBoxStyle}>
                <ToolBox5Icon />
              </div>
              <div style={ToolBoxStyle}>
                <ToolBox6Icon />
              </div>
              <div style={ToolBoxStyle}>
                <ToolBox7Icon />
              </div>
            </div>
            <PictureBoxComponent />
          </div>
        </div>
        <div style={RightBox}>
          <GeneralAnalysisComponent />
          <AIAnalysisComponent />
          <IntelegentPredictionComponent />
        </div>
      </div>
    </div>
  )
}

export default Index

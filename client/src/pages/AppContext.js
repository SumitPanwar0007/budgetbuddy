import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { message } from "antd";
import axios from "axios";
import moment from "moment";
import { createContext,useContext,useState } from "react";



const AppContext= createContext();

export const useAppContext=()=>{
    return useContext(AppContext);
}

export const AppContextProvider=({children})=>{
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allTransaction, setAllTransaction] = useState([7000]);
    const [frequency, setFrequency] = useState('7');
    const [selectDate, setSelectDate] = useState([]);
    const [type, setType] = useState('all');
    const [viewData, setViewData] = useState('');
    const [editable, setEditable] = useState(null);
  const [loginUser, setLoginUser] = useState('');
  const[dashboard,setDashboard]= useState(true);
  const [layout,setLayout]= useState(false);
  const [activeButton, setActiveButton] = useState('Layout');
  const [menu, setMenu]= useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [totalPage,setTotalPage]=useState(1);

   // Delete handler
   const handleDelete = async (record) => {
    try {
      setLoading(true);
      await axios.post('/transection/delete-transection', {
        transectionId: record._id,
      });
      setLoading(false);
      message.success('Transection Deleted!');
    } catch(error) {
      setLoading(false);
      console.log(error);
      message.error('Unable to Delete');
    }
  };

    const [columns, setColumns] = useState([
        {
          title: 'Date',
          dataIndex: 'date',
          render: (text) => <span>{moment(text).format('YYYY-MM-DD')}</span>,
          
        },
        {
          title: 'Amount',  
          dataIndex: 'amount',
         
        },
        {
          title: 'Type',
          dataIndex: 'type',
          render: (text,record) => (
            <div style={{ color:record.type === 'expense'? 'red':'green' }}>{text}</div>
          ),
        
        },
        {
          title: 'Category',
          dataIndex: 'category',
          responsive:['sm'],
        },
        {
          title: 'Description',
          dataIndex: 'description',
          responsive:['sm'],
        },
        {
          title: 'Actions',
          render: (text, record) => (
            <div>
              <EditOutlined
                onClick={() => {  
                  setEditable(record);
                  setShowModal(true);
                }}
              />
              
              <DeleteOutlined
                className='mx-2 color-red-300'
                onClick={() => {
                  handleDelete(record);
                }}
              />
            </div>
          ),
        },
      ])
    const contextValue={
        showModal,
        setShowModal,

        loading,setLoading,
        allTransaction,setAllTransaction,
        frequency,setFrequency,
        selectDate,setSelectDate,
        type,setType,
        viewData,setViewData,
        editable,setEditable,
        columns,setColumns,
        loginUser, setLoginUser,
        dashboard,setDashboard,
        layout,setLayout,
        activeButton, setActiveButton,
        menu, setMenu,
        isSidebarOpen, setSidebarOpen,
        totalPage,setTotalPage,
        
      
    }
   

return (
<AppContext.Provider value={contextValue}>
{children}
</AppContext.Provider>
)
}
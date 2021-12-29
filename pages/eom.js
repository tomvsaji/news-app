import { Toolbar } from '../components/toolbar';
import styles from '../styles/EOM.module.css'

function eom({employee}) {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the Month</h1>
            </div>
            <div className={styles.employeeOfTheMonth}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <img src={employee.image} alt={`${employee.name} photo`} />
                <p>{employee.description}</p>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
   const employee =  await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth').then(r=> r.json());

   return {
       props: {
           employee
       }
   }
}

export default eom;

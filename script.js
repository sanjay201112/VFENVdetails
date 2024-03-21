function showDetails(item) {
    var details = '';
    switch(item) {
        case 'CRM' :
            details = 'SIT3 CRM Link : http://crm.sit3.equinox.vf-ie.internal.vodafone.com:37002/AmdocsOSSsm/CRM/Crm.jnlp<br><br> SIT1 CRM Link : http://iebsx2vr:15648/Crm/CRM/Crm.jnlp?$workspace=workspace_Amdocs.xml<br><br> PT8 CRM link : http://crm.pt8.equinox.vf-ie.internal.vodafone.com:22123/Crm <br><br> PT1 CRM link :http://crm.pt1.equinox.vf-ie.internal.vodafone.com:22610/Crm/ <br><br> SIT2 CRM link : http://iebssbvr:14208/Crm/<br><br> SIT3 UFE :https://iebsx2vr:39551/ufe/<br><br> Password =123456789 <br><br> SIT1 UFE :https://iebsx2vr:39552/ufe/ <br><br> Password :123456789'; 
            break;
        case 'DBA' :
            details = 'SIT3-ABP <br> 1. User : VFIAPP7 <br> 2. Pass : VFIAPP7_E4C <br> 3. TNS_Database : TSTABP1  <br> SIT3-CRM<br> 1.User:SACON <br>2.Pass:SACON_e4uinox<br>3.TNS_Database:TSTCRM7 <br>SIT3-OMS <br> 1.User:VFI7OMS <br>2.Pass:VFI7OMS_E4C<br>3.TNS_Database:TSTOMS1<br> SIT1-ABP<br> 1.User:VFIAPP3 <br>2.pass:VFIAPP3_E4C<br> 3.TNS_Database:TSTABP1 ,<br> SIT1- OMS <br> 1.User:VFI3OMS<br>Pass:VFI3OMS_E4C<br> 3.TNS_Database:TSTOMS1<br> SIT1CRM<br>1.User:SACON<br> 2.Psss:SACON_e4uinox<br>3.TNS_Database:TSTCRM3<br>PRD1-ABP<br>1.User:PRDCUSTC<br>2.Pass:PRDCUSTC_E4C<br>3.TCN_Database:PET1CUST<br>PRD1-CRM<br>1.User:SA<br>2.Pass:SA_E4UINOX<br>3.TCN_database:PET1CRM<br> PED1-OMS<br>1.User:PRDOMS<br>2.Pass:PRDOMS_E4C<br>3.TCN_database:PET1OMS<br> PT1 -ABP<br>1.User :PT1APP<br>2.Pass:PT1APP_E4C<br>3.Csutom_JDBC:jdbc:oracle:thin:@(description=(source_route=yes)(address_list=(address=(protocol=tcp)(host=37.25.160.19)(port=31950))(address=(protocol=tcp)(host=ie2869yr)(port=33001)))(connect_data=(SID=PT1ABP)))<br> PT1-CRM<br> 1.User:SA<br> 2.Pass:PT1OMS_E4C<br>3.custom_JDBC:jdbc:oracle:thin:@(description=(source_route=yes)(address_list=(address=(protocol=tcp)(host=37.25.160.19)(port=31950))(address=(protocol=tcp)(host= ie2835yr)(port=33001)))(connect_data=(SID= PT1CRM)))<br>PT1-OMS<br>1.User:PT1OMS<br>2.Pass:PT1OMS_E4C<br>3.Custom_JDBC:jdbc:oracle:thin:@(description=(source_route=yes)(address_list=(address=(protocol=tcp)(host=37.25.160.19)(port=31950))(address=(protocol=tcp)(host=ie2868yr)(port=33001)))(connect_data=(SID=PT1OMS)))<br>PT8-ABP<br>1.User :PT8APP <br>2.Pass:PT8APP_E4C<br>3.custom_JDBC:jdbc:oracle:thin:@(description=(source_route=yes)(address_list=(address=(protocol=tcp)(host=37.25.160.19)(port=31950))(address=(protocol=tcp)(host=ie2869yr)(port=33001)))(connect_data=(SID=PT1ABP)))<br>PT8-OMS<br>1.User :PT8OMS<br>2.Pass:PT8OMS_E4C<br>3.custom_JDBC: jdbc:oracle:thin:@(description=(source_route=yes)(address_list=(address=(protocol=tcp)(host=37.25.160.19)(port=31950))(address=(protocol=tcp)(host=ie2868yr)(port=33001)))(connect_data=(SID=PT1OMS)))<br> PT8-CRM<br>1.User :SA<br>Pass:SA_E4UNIOX<br>custom_JDBC:<br> SIT2 ABP<br>1.User: VFIAPP2<br>2.Pass: VFIAPP2_E4C<br>TCN -TSTABP1.test.ie<br> SIT2 -OMS <br>1.User:VFI2OMS<br>2.Pass:VFI2OMS_E4C<br> TCN -TSTOMS1.test.ie'; 
            break;
        case 'Unix':
            details = 'Welcome !!'; 
            break;
        case 'OSB':
            details = 'SIT3 OSB :http://iebsx2vr:9001/servicebus/faces/login<br> User/Password: esbtest/esbtest@123<br> SIT1 OSB : http://iebsx2vr:37501/servicebus/faces/login<br> User/Password : esbtest1/ esbtest1@123<br> SIT2 OSB : //iebsx2vr:11001/servicebus/faces/login<br> User/password :esbtest1\esbtest1@123'; 
            break;
        case 'SOM':
            details = 'SIT3 SOM : http://ieamdavr:37002/AmdocsOSSsm/CRM/Crm.jnlp <br> Password -sa/sa <br> SIT1 SOM : http://ieamdavr:33002/AmdocsOSSsm/CRM/Crm.jnlp <br> Password -sa/sa<br> SIT2 SOM: http://ieamdavr:34002/AmdocsOSSsm/CRM/Crm.jnlp <br> Password :sa/sa  '; 
            break;
        case 'MCO':
            details = 'SIT1 MCO URL :http://iefisavr:15621/mco/#dashboard<br><br> User/Password :test/ Test_123!<br><br>PT MCO URL:http://iebsx1vr.dc-dublin.de:22284/mco <br><br> User/Password :manthan.pandhare1/Asdf@2023 <br><br> SIT3 MCO URL : http://iefisavr:15621/mco/#dashboard <br><br>User/Password :  mco-support/Mco_11!'; 
            break;
       case 'AUA':
            details='SIT3 AUA :http://iesisavr:37007/aua.jsp<br> User/Password :super/Unix11!! <br><br> SIT1 AUA : http://iebsx2vr:33008/aua.jsp<br><br> User/Password :super/Unix11!!<br><br> SIT2 AUA :http://iefisavr:34007/aua.jsp <br><br>User/Password :super/Unix11!!';
             break;
    }
    document.getElementById('box').innerHTML = details;
}

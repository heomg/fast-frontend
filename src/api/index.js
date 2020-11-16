import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function fetchPatients() {
  return instance.get('patients');
}

function fetchPatientsByName(ptname) {
  return instance.get(`patients/${ptname}`);
}

function fetchPcontents(ptid) {
  return instance.get(`pcontents/${ptid}`);
}

function createPatient(patientInfo) {
  return instance.post('patients', patientInfo);
}

function fetchTresults(pcontentInfo) {
  return instance.post('tresults', pcontentInfo);
}

function fetchTaskTime(taskInfo) {
  return instance.post('tresults/tkid', taskInfo);
}

function fetchHandData(taskInfo) {
  return instance.post('tresults/handData', taskInfo);
}

function sendHandData(test) {
  return instance.post('hands', test);
}

function sendHandDataGet() {
  return instance.get('hands');
}

export {
  fetchPatients,
  createPatient,
  fetchPatientsByName,
  fetchPcontents,
  fetchTresults,
  fetchTaskTime,
  fetchHandData,
  sendHandData,
  sendHandDataGet,
};

import { useState, useContext } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormSuccess from '@/components/FormSuccess'
import FormError from '@/components/FormError'
import Label from '@/components/common/Label'
import FormInput from '@/components/FormInput'
import { AuthContext } from '@/context/AuthContext'
import { publicFetch } from '@/config/fetch'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import Logo from '@/components/common/Logo'
import MobileBackNav from '@/components/common/MobileBackNav'
import FormSelect from '@/components/common/FormSelect'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  gender: Yup.string().required('Gender is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  title: Yup.string().required('Title is required'),
  address: Yup.string().required('Address is required'),
  dob: Yup.string().required('DOB is required'),
  phone: Yup.string().required('Phone is required'),
  nationality: Yup.string().required('Nationality is required'),
  accountType: Yup.string().required('Account Type is required'),
  currency: Yup.string().required('Currency is required'),
  idType: Yup.string().required('ID type is required'),
  // validID: Yup.string().required('Valid ID is required'),
})

const RegisterPage = () => {
  const router = useRouter()
  const { setAuthState } = useContext(AuthContext)
  const [signupSuccess, setSignupSuccess] = useState<any>()
  const [signupError, setSignupError] = useState<any>()
  const [loginLoading, setLoginLoading] = useState<any>(false)

  const submitCredentials = async (credentials: any) => {
    try {
      setLoginLoading(true)
      const {data} = await publicFetch.post('signup', credentials)
      setAuthState(data)
      setSignupSuccess(data.message)
      setSignupError('')
      router.push('/login')
    } catch (error: any) {
      setLoginLoading(false)
      const { data } = error.response
      setSignupError(data.message)
      setSignupSuccess('')
    }
  }

  return (
    <Layout>
      <Section>
        <MobileBackNav />
        <div className='flex container px-6 pb-40 pt-20 items-center justify-center mx-auto sm:w-4/6'>
          <div className='w-full sm:w-full mx-auto sm:pt-10'>
            <h2 className='font-bold text-4xl sm:text-4xl text-left my-4'>
              Welcome to Bankist
            </h2>
            <p className='font-semibold text-md text-left text-gray-400 my-2'>
              Create account to continue
            </p>

            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                gender: '',
                email: '',
                password: '',
                title: '',
                address: '',
                dob: '',
                phone: '',
                nationality: '',
                accountType: '',
                currency: '',
                idType: ''
              }}
              onSubmit={(values) => submitCredentials(values)}
              validationSchema={SignupSchema}>
              {() => (
                <Form className='mt-3 sm:mt-8'>
                  {signupSuccess && <FormSuccess text={signupSuccess} />}
                  {signupError && <FormError text={signupError} />}
                  <input type='hidden' name='remember' value='true' />
                  <div>
                    <div className='flex sm:flex-row flex-col'>
                      <div className='mb-2 sm:mr-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='First Name' />
                        </div>
                        <FormInput
                          ariaLabel='First Name'
                          name='firstName'
                          type='text'
                          placeholder='First Name'
                        />
                      </div>
                      <div className='mb-2 sm:ml-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Last Name' />
                        </div>
                        <FormInput
                          ariaLabel='Last Name'
                          name='lastName'
                          type='text'
                          placeholder='Last Name'
                        />
                      </div>
                    </div>
                    <div className='flex sm:flex-row flex-col'>
                      <div className='mb-2 sm:mr-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Gender' />
                        </div>
                        <FormInput isSelect name='gender'>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                          <option value='Others'>Others</option>
                        </FormInput>
                      </div>
                      <div className='mb-2 sm:ml-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Title' />
                        </div>
                        <FormInput isSelect name='title'>
                          <option value='Mr'>Mr</option>
                          <option value='Mrs'>Mrs</option>
                          <option value='Miss'>Miss</option>
                          <option value='Dr'>Dr</option>
                        </FormInput>
                      </div>
                    </div>
                    <div className='flex sm:flex-row flex-col'>
                      <div className='mb-2 sm:mr-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Email address' />
                        </div>
                        <FormInput
                          ariaLabel='Email address'
                          name='email'
                          type='email'
                          placeholder='Email address'
                        />
                      </div>
                      <div className='mb-2 sm:ml-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Password' />
                        </div>
                        <FormInput
                          ariaLabel='Password'
                          name='password'
                          type='password'
                          placeholder='Password'
                        />
                      </div>
                    </div>

                    <h3 className='font-semibold my-6'>Contact Details</h3>
                    <div className='mb-2'>
                      <div className='mb-1'>
                        <Label text='Residential Address' />
                      </div>
                      <FormInput
                        ariaLabel='Address'
                        name='address'
                        type='text'
                        placeholder='Residential Address'
                      />
                    </div>
                    <div className='flex sm:flex-row flex-col'>
                      <div className='mb-2 sm:mr-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Date of Birth' />
                        </div>
                        <FormInput
                          ariaLabel='Date of Birth'
                          name='dob'
                          type='date'
                          placeholder='Date of Birth'
                        />
                      </div>
                      <div className='mb-2 sm:ml-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Cell Phone' />
                        </div>
                        <FormInput
                          ariaLabel='Cell Phone'
                          name='phone'
                          type='tell'
                          placeholder='Cell Phone'
                        />
                      </div>
                    </div>
                    <div className='flex sm:flex-row flex-col'>
                      <div className='mb-2 sm:mr-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Nationality / Citizenship *' />
                        </div>
                        <FormInput isSelect name='nationality'>
                          <option value='Afghanistan'>Afghanistan</option>
                          <option value='Albania '>Albania</option>
                          <option value='Algeria'>Algeria</option>
                          <option value='American Samoa'>American Samoa</option>
                          <option value='Andorra'>Andorra</option>
                          <option value='Angola'>Angola</option>
                          <option value='Anguilla'>Anguilla</option>
                          <option value='Antarctica'>Antarctica</option>
                          <option value='Antigua and Barbuda'>
                            Antigua and Barbuda
                          </option>
                          <option value='Argentina '>Argentina</option>
                          <option value='Armenia'>Armenia</option>
                          <option value='Aruba'>Aruba</option>
                          <option value='Australia'>Australia</option>
                          <option value='Austria'>Austria</option>
                          <option value='Azerbaijan'>Azerbaijan</option>
                          <option value='Bahamas'>Bahamas</option>
                          <option value='Bahrain'>Bahrain</option>
                          <option value='Bangladesh'>Bangladesh</option>
                          <option value='Barbados'>Barbados</option>
                          <option value='Belarus'>Belarus</option>
                          <option value='Belgium'>Belgium</option>
                          <option value='Belize'>Belize</option>
                          <option value='Benin'>Benin</option>
                          <option value='Bermuda'>Bermuda</option>
                          <option value='Bhutan'>Bhutan</option>
                          <option value='Bolivia'>Bolivia</option>
                          <option value='Bosnia and Herzegowina'>
                            Bosnia and Herzegowina
                          </option>
                          <option value='Botswana'>Botswana</option>
                          <option value='Bouvet Island'>Bouvet Island</option>
                          <option value='Brazil'>Brazil</option>
                          <option value='British Indian Ocean Territory'>
                            British Indian Ocean Territory
                          </option>
                          <option value='Brunei Darussalam'>
                            Brunei Darussalam
                          </option>
                          <option value='Bulgaria'>Bulgaria</option>
                          <option value='Burundi'>Burundi</option>
                          <option value='Cambodia'>Cambodia</option>
                          <option value='Cameroon'>Cameroon</option>
                          <option value='Canada'>Canada</option>
                          <option value='Cape Verde'>Cape Verde</option>
                          <option value='Cayman Islands'>Cayman Islands</option>
                          <option value='Central African Republic'>
                            Central African Republic
                          </option>
                          <option value='Chad'>Chad</option>
                          <option value='Chile'>Chile</option>
                          <option value='China'>China</option>
                          <option value='Christmas Island'>
                            Christmas Island
                          </option>
                          <option value='Cocos (Keeling) Islands'>
                            Cocos (Keeling) Islands
                          </option>
                          <option value='Colombia'>Colombia</option>
                          <option value='Comoros'>Comoros</option>
                          <option value='Congo'>Congo</option>
                          <option value='Cook Islands'>Cook Islands</option>
                          <option value='Costa Rica'>Costa Rica</option>
                          <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                          <option value='Croatia'>Croatia</option>
                          <option value='Cuba'>Cuba</option>
                          <option value='Cyprus'>Cyprus</option>
                          <option value='Czech Republic'>Czech Republic</option>
                          <option value='Denmark'>Denmark</option>
                          <option value='Djibouti'>Djibouti</option>
                          <option value='Dominica'>Dominica</option>
                          <option value='Dominican Republic'>
                            Dominican Republic
                          </option>
                          <option value='East Timor'>East Timor</option>
                          <option value='Ecuador'>Ecuador</option>
                          <option value='Egypt'>Egypt</option>
                          <option value='El Salvador'>El Salvador</option>
                          <option value='Equatorial Guinea'>
                            Equatorial Guinea
                          </option>
                          <option value='Eritrea'>Eritrea</option>
                          <option value='Estonia'>Estonia</option>
                          <option value='Ethiopia'>Ethiopia</option>
                          <option value='Falkland Islands'>
                            Falkland Islands
                          </option>
                          <option value='Faroe Islands'>Faroe Islands</option>
                          <option value='Fiji'>Fiji</option>
                          <option value='Finland'>Finland</option>
                          <option value='France'>France</option>
                          <option value='France (Metropolitan)'>
                            France (Metropolitan)
                          </option>
                          <option value='French Guiana'>French Guiana</option>
                          <option value='French Polynesia'>
                            French Polynesia
                          </option>
                          <option value='French Southern Territories'>
                            French Southern Territories
                          </option>
                          <option value='Gabon'>Gabon</option>
                          <option value='Gambia'>Gambia</option>
                          <option value='Georgia'>Georgia</option>
                          <option value='Germany'>Germany</option>
                          <option value='Ghana'>Ghana</option>
                          <option value='Gibraltar'>Gibraltar</option>
                          <option value='Greece'>Greece</option>
                          <option value='Greenland'>Greenland</option>
                          <option value='Grenada'>Grenada</option>
                          <option value='Guadeloupe'>Guadeloupe</option>
                          <option value='Guam'>Guam</option>
                          <option value='Guatemala'>Guatemala</option>
                          <option value='Guinea'>Guinea</option>
                          <option value='Guinea-Bissau'>Guinea-Bissau</option>
                          <option value='Guyana'>Guyana</option>
                          <option value='Haiti'>Haiti</option>
                          <option value='Heard and McDonald Islands'>
                            Heard and McDonald Islands
                          </option>
                          <option value='Honduras'>Honduras</option>
                          <option value='Hong Kong'>Hong Kong</option>
                          <option value='Hungary'>Hungary</option>
                          <option value='Iceland'>Iceland</option>
                          <option value='India'>India</option>
                          <option value='Indonesia'>Indonesia</option>
                          <option value='Iran'>Iran</option>
                          <option value='Iraq'>Iraq</option>
                          <option value='Ireland'>Ireland</option>
                          <option value='Israel'>Israel</option>
                          <option value='Italy'>Italy</option>
                          <option value='Jamaica'>Jamaica</option>
                          <option value='Japan'>Japan</option>
                          <option value='Jordan'>Jordan</option>
                          <option value='Kazakhstan'>Kazakhstan</option>
                          <option value='Kenya'>Kenya</option>
                          <option value='Kiribati'>Kiribati</option>
                          <option value="Korea (Democratic People's Republic of)">
                            Korea (Democratic People’s Republic of)
                          </option>
                          <option value='Korea (Republic of)'>
                            Korea (Republic of)
                          </option>
                          <option value='Kuwait'>Kuwait</option>
                          <option value='Kyrgyzstan'>Kyrgyzstan</option>
                          <option value="Lao People's Democratic Republic">
                            Lao People’s Democratic Republic
                          </option>
                          <option value='Latvia'>Latvia</option>
                          <option value='Lebanon'>Lebanon</option>
                          <option value='Lesotho'>Lesotho</option>
                          <option value='Liberia'>Liberia</option>
                          <option value='Libyan Arab Jamahiriya'>
                            Libyan Arab Jamahiriya
                          </option>
                          <option value='Liechtenstein'>Liechtenstein</option>
                          <option value='Lithuania'>Lithuania</option>
                          <option value='Luxembourg'>Luxembourg</option>
                          <option value='Macau'>Macau</option>
                          <option value='Macedonia'>
                            Macedonia (The Former Yugoslav Republic of)
                          </option>
                          <option value='Madagascar'>Madagascar</option>
                          <option value='Malawi'>Malawi</option>
                          <option value='Malaysia'>Malaysia</option>
                          <option value='Maldives'>Maldives</option>
                          <option value='Mali'>Mali</option>
                          <option value='Malta'>Malta</option>
                          <option value='Marshall Islands'>
                            Marshall Islands
                          </option>
                          <option value='Martinique'>Martinique</option>
                          <option value='Mauritania'>Mauritania</option>
                          <option value='Mauritius'>Mauritius</option>
                          <option value='Mayotte'>Mayotte</option>
                          <option value='Mexico'>Mexico</option>
                          <option value='Micronesia (Federated States of)'>
                            Micronesia (Federated States of)
                          </option>
                          <option value='Moldova (Republic of)'>
                            Moldova (Republic of)
                          </option>
                          <option value='Monaco'>Monaco</option>
                          <option value='Mongolia'>Mongolia</option>
                          <option value='Montserrat'>Montserrat</option>
                          <option value='Morocco'>Morocco</option>
                          <option value='Mozambique'>Mozambique</option>
                          <option value='Myanmar'>Myanmar</option>
                          <option value='Namibia'>Namibia</option>
                          <option value='Nauru'>Nauru</option>
                          <option value='Nepal'>Nepal</option>
                          <option value='Netherlands'>Netherlands</option>
                          <option value='Netherlands Antilles'>
                            Netherlands Antilles
                          </option>
                          <option value='New Caledonia'>New Caledonia</option>
                          <option value='New Zealand'>New Zealand</option>
                          <option value='Nicaragua'>Nicaragua</option>
                          <option value='Niger'>Niger</option>
                          <option value='Nigeria'>Nigeria</option>
                          <option value='Niue'>Niue</option>
                          <option value='Norfolk Island'>Norfolk Island</option>
                          <option value='Northern Mariana Islands'>
                            Northern Mariana Islands
                          </option>
                          <option value='Norway'>Norway</option>
                          <option value='Oman'>Oman</option>
                          <option value='Pakistan'>Pakistan</option>
                          <option value='Palau'>Palau</option>
                          <option value='Panama'>Panama</option>
                          <option value='Papua New Guinea'>
                            Papua New Guinea
                          </option>
                          <option value='Paraguay'>Paraguay</option>
                          <option value='Peru'>Peru</option>
                          <option value='Philippines'>Philippines</option>
                          <option value='Pitcairn'>Pitcairn</option>
                          <option value='Poland'>Poland</option>
                          <option value='Portugal'>Portugal</option>
                          <option value='Puerto Rico'>Puerto Rico</option>
                          <option value='Qatar'>Qatar</option>
                          <option value='Reunion'>Reunion</option>
                          <option value='Romania'>Romania</option>
                          <option value='Russian Federation'>
                            Russian Federation
                          </option>
                          <option value='Rwanda'>Rwanda</option>
                          <option value='Saint Kitts and Nevis'>
                            Saint Kitts and Nevis
                          </option>
                          <option value='Saint Lucia'>Saint Lucia</option>
                          <option value='Saint Vincent and the Grenadines'>
                            Saint Vincent and the Grenadines
                          </option>
                          <option value='Samoa'>Samoa</option>
                          <option value='San Marino'>San Marino</option>
                          <option value='Sao Tome and Principe'>
                            Sao Tome and Principe
                          </option>
                          <option value='Saudi Arabia'>Saudi Arabia</option>
                          <option value='Sebia'>Sebia</option>
                          <option value='Senegal'>Senegal</option>
                          <option value='Seychelles'>Seychelles</option>
                          <option value='Sierra Leone'>Sierra Leone</option>
                          <option value='Singapore'>Singapore</option>
                          <option value='Slovakia (Slovak Republic)'>
                            Slovakia (Slovak Republic)
                          </option>
                          <option value='Slovenia'>Slovenia</option>
                          <option value='Solomon Islands'>Solomon Islands</option>
                          <option value='Somalia'>Somalia</option>
                          <option value='South Africa'>South Africa</option>
                          <option value='South Georgia &amp; South Sandwich Islands'>
                            South Georgia and the South Sandwich Islands
                          </option>
                          <option value='Spain'>Spain</option>
                          <option value='Sri Lanka'>Sri Lanka</option>
                          <option value='St. Helena'>St. Helena</option>
                          <option value='St. Pierre and Miquelon'>
                            St. Pierre and Miquelon
                          </option>
                          <option value='Sudan'>Sudan</option>
                          <option value='Suriname'>Suriname</option>
                          <option value='Svalbard and Jan Mayen Islands'>
                            Svalbard and Jan Mayen Islands
                          </option>
                          <option value='Swaziland'>Swaziland</option>
                          <option value='Sweden'>Sweden</option>
                          <option value='Switzerland'>Switzerland</option>
                          <option value='Syrian Arab Republic'>
                            Syrian Arab Republic
                          </option>
                          <option value='Taiwan (Province of China)'>
                            Taiwan (Province of China)
                          </option>
                          <option value='Tajikistan'>Tajikistan</option>
                          <option value='Tanzania (United Republic of)'>
                            Tanzania (United Republic of)
                          </option>
                          <option value='Thailand'>Thailand</option>
                          <option value='Togo'>Togo</option>
                          <option value='Tokelau'>Tokelau</option>
                          <option value='Tonga'>Tonga</option>
                          <option value='Trinidad and Tobago'>
                            Trinidad and Tobago
                          </option>
                          <option value='Tunisia'>Tunisia</option>
                          <option value='Turkey'>Turkey</option>
                          <option value='Turkmenistan'>Turkmenistan</option>
                          <option value='Turks and Caicos Islands'>
                            Turks and Caicos Islands
                          </option>
                          <option value='Tuvalu'>Tuvalu</option>
                          <option value='Uganda'>Uganda</option>
                          <option value='Ukraine'>Ukraine</option>
                          <option value='United Arab Emirates'>
                            United Arab Emirates
                          </option>
                          <option value='United Kingdom'>United Kingdom</option>
                          <option value='United States Minor Outlying Islands'>
                            United States Minor Outlying Islands
                          </option>
                          <option value='United States of America'>
                            United States of America
                          </option>
                          <option value='Uruguay'>Uruguay</option>
                          <option value='Uzbekistan'>Uzbekistan</option>
                          <option value='Vanuatu'>Vanuatu</option>
                          <option value='Vatican City State (Holy See)'>
                            Vatican City State (Holy See)
                          </option>
                          <option value='Venezuela'>Venezuela</option>
                          <option value='Viet Nam'>Viet Nam</option>
                          <option value='Virgin Islands (British)'>
                            Virgin Islands (British)
                          </option>
                          <option value='Virgin Islands (U.S.)'>
                            Virgin Islands (U.S.)
                          </option>
                          <option value='Wallis and Futuna Islands'>
                            Wallis and Futuna Islands
                          </option>
                          <option value='Western Sahara'>Western Sahara</option>
                          <option value='Yemen'>Yemen</option>
                          <option value='Yugoslavia'>Yugoslavia</option>
                          <option value='Zaire'>Zaire</option>
                          <option value='Zambia'>Zambia</option>
                          <option value='Zimbabwe'>Zimbabwe</option>
                        </FormInput>
                      </div>
                      <div className='mb-2 sm:ml-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Choose Account Type' />
                        </div>
                        <FormInput isSelect name='accountType'>
                          <option value='Current Account'>Current Account</option>
                          <option value='Savings Account'>Savings Account</option>
                          <option value='Salary Account'>Salary Account</option>
                          <option value='Mortgage Account'>Mortgage Account</option>
                          <option value='Loan Account'>Loan Account</option>
                          <option value='Offshore Account'>Offshore Account</option>
                        </FormInput>
                      </div>
                    </div>
                    <div className='flex sm:flex-row flex-col'>
                      <div className='mb-2 sm:mr-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Currency' />
                        </div>
                        <FormInput isSelect name='currency'>
                          <option value='USD'>USD</option>
                          <option value='EURO'>EURO</option>
                          <option value='POUNDS'>POUNDS</option>
                          <option value='ZAR'>ZAR</option>
                          <option value='NGN'>NGN</option>
                          <option value='PULA'>Pula</option>
                          <option value='NAD'>NAD</option>
                          <option value='ZMW'>ZMW</option>
                          <option value='SZL'>SZL</option>
                          <option value='LSL'>LSL</option>
                        </FormInput>
                      </div>
                      <div className='mb-2 sm:mr-2 sm:w-1/2'>
                        <div className='mb-1'>
                          <Label text='Identity Type' />
                        </div>
                        <FormInput isSelect name='idType'>
                          <option value='passport'>Passport</option>
                          <option value='id'>ID</option>
                          <option value='Drivers licence'>Drivers licence</option>
                        </FormInput>
                      </div>
                    </div>
                    {/* <div className='mb-2'>
                      <div className='mb-1'>
                        <Label text='Upload a valid Government issued Identification:' />
                      </div>
                      <FormInput
                        ariaLabel='PassportID'
                        name='validID'
                        type='file'
                      />
                    </div> */}
                  </div>

                  <div className=' text-center'>
                    <Button
                      type='submit'
                      loadingText='Creating account....'
                      loading={loginLoading}
                      className='core-btn w-3/6 mx-auto text-lg shadow-2xl font-bold mt-4 bg-brand text-gray-100 py-3 px-6 md:inline-block text-gray-50'>
                      Create account
                    </Button>
                    <p className='mt-6 sm:mt-8'>
                      Already have an account?{' '}
                      <Link href='/login' className='text-blue font-semibold'>
                        Sign in
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-image: url(./herobg.png);
  background-position: center;
  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100%;
  }
`

export default RegisterPage

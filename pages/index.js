import Image from 'next/image'
function Home({ technologies, services }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column' }}>
      <div style={{display: 'flex'}}>
      {technologies.map(technology => (
        <div style={{width: '300px'}}>
          <Image 
            src={technology.thumbnail.url} 
            width={254}
            height={254}
            layout="responsive"
            />
        </div>
      ))}
      </div>

      <div style={{display: 'flex', marginTop: '32px'}}>
        {services.map(service => (
          <div style={{width: '300px'}}>
            <Image             
              src={service.thumbnail.url} 
              width={254} 
              height={254} 
              layout="responsive" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const responseTech = await fetch('http://api.plataformasabia.com/technologies?embed&perPage=4&orderBy=likes&order=DESC&status=published&taxonomy=category')
  const technologies = await responseTech.json()

  const responseServices = await fetch('http://api.plataformasabia.com/services?embed&perPage=4&orderBy=likes&order=DESC')
  const services = await responseServices.json()

  return {
    technologies,
    services
  }
}

export default Home

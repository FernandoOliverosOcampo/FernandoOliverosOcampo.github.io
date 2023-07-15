import config from '../supabase/config.js'

const Modelo ={
    async mostrarDatosProyectos() {

        const res = await axios({
          method: "GET",
          url: `https://hqlzuquiyrarqwyeslkl.supabase.co/rest/v1/Datosproyecto?select=*`,
          headers: config.headers,
        });
        return res;
      },
}
export default Modelo;
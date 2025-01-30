import config from '../supabase/config.js'

const Modelo ={
    async mostrarDatosProyectos() {

        const res = await axios({
          method: "GET",
          url: `https://hqlzuquiyrarqwyeslkl.supabase.co/rest/v1/Datosproyecto?select=*&order=id_proyecto.desc`,
          headers: config.headers,
        });
        return res;
    },
    async mostrarDatosLenguajes() {

      const res = await axios({
        method: "GET",
        url: `https://hqlzuquiyrarqwyeslkl.supabase.co/rest/v1/lenguajestablas?select=*`,
        headers: config.headers,
      });
      return res;
  },
}
export default Modelo;
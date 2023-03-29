namespace API.Helpers
{
    public class UserParams
    {
        private const int MaxPageSize = 50;  //Tamaño max q puede tener la pagina
        public int PageNumber { get; set; } =1;  //Número inicial por defecto
        private int _pageSize = 10;  //Tamaño por defecto de la página si no se le dice.
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }

        public string CurrentUserName { get; set; }
        public string Gender { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 100;
        public string OrderBy { get; set; } = "lastActive";
    }
}
namespace API.Helpers
{
    public class PaginationParams 
    {
        private const int MaxPageSize = 50;  //Tamaño max q puede tener la pagina
        public int PageNumber { get; set; } =1;  //Número inicial por defecto
        private int _pageSize = 10;  //Tamaño por defecto de la página si no se le dice.
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }
    }
}